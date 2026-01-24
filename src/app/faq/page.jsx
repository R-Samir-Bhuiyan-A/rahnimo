"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import useAxios from '../../hooks/useAxios';
import Skeleton from '../../components/ui/Skeleton';
import ErrorState from '../../components/ui/ErrorState';
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import {
    LayoutGrid,
    CreditCard,
    Settings,
    Box,
    HelpCircle,
    PenTool,
    Lightbulb
} from "lucide-react";
import Link from 'next/link';

// --- Icons Map ---
const CATEGORY_ICONS = {
    "All": LayoutGrid,
    "General": HelpCircle,
    "Billing": CreditCard,
    "Account": Settings,
    "Services": PenTool,
    "Products": Box,
    // Add fuzzy matching fallbacks in logic if needed
};

// --- Did You Know Component ---

const FACTS = [
    "Good design increases business conversion by up to 200%.",
    "We use sustainable materials in 80% of our physical projects.",
    "Color psychology plays a vital role in how users perceive your brand.",
    "Our team has won 3 international design awards this year.",
    "Minimalism isn't just an aesthetic, it's a usability principle."
];

const DidYouKnowWidget = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % FACTS.length);
        }, 8000); // Change every 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-secondary/30 border border-border rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <Lightbulb size={120} />
            </div>

            <div className="flex items-center gap-3 mb-4 text-primary">
                <Lightbulb size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Did you know?</span>
            </div>

            <div className="h-24 relative">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-foreground text-sm font-medium leading-relaxed absolute w-full"
                    >
                        "{FACTS[index]}"
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary">
                <motion.div
                    key={index}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-primary/50"
                />
            </div>
        </div>
    );
};

// --- FAQ Item Component ---
const FaqItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div
            className={`group border-b border-border/50 mb-4 ${isOpen ? 'pb-6' : ''}`}
        >
            <button
                onClick={toggle}
                className="w-full flex justify-between items-start py-6 text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    {/* Subtle Bullet Decoration */}
                    <div
                        className={`w-1.5 h-1.5 rounded-full transition-transform ${isOpen ? 'scale-100 opacity-100 bg-primary' : 'scale-80 opacity-30 bg-foreground'}`}
                    />
                    <span className={`text-lg md:text-xl font-medium pr-8 transition-colors duration-300 leading-relaxed ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                        {question}
                    </span>
                </div>

                <span
                    className={`mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}
                >
                    <IoIosArrowDown size={20} />
                </span>
            </button>
            {isOpen && (
                <div
                    className="overflow-hidden pl-6 md:pl-8 transition-all duration-300"
                >
                    <div
                        className="pt-2 pl-2 text-muted-foreground leading-loose prose prose-sm md:prose-base dark:prose-invert max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-6 [&_h1]:text-foreground [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-foreground [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-10 [&_ol]:list-decimal [&_ol]:pl-10 [&_a]:text-primary [&_a]:underline"
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                </div>
            )}
        </div>
    );
};

const FaqPage = () => {
    const axiosInstance = useAxios();
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const { data: faqs = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['faqs'],
        queryFn: async () => {
            const res = await axiosInstance.get('/api/public/faqs');
            return res.data.data;
        }
    });

    const categories = useMemo(() => {
        const cats = new Set(faqs.map(f => f.category));
        return ["All", ...Array.from(cats)];
    }, [faqs]);

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [faqs, activeCategory, searchQuery]);

    const toggleFaq = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    // Video Ref for slow motion
    const videoRef = React.useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    if (isError) return (
        <section className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
            <ErrorState onRetry={() => refetch()} message="Failed to load FAQs." />
        </section>
    );

    return (
        <section className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto relative overflow-hidden">

            {/* 1. Background Video */}
            <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[3px]"
                >
                    <source src="/faq.mp4" type="video/mp4" />
                </video>
                {/* Overlay to create "animation" feel and wash out video */}
                <div className="absolute inset-0 bg-background/85" />
            </div>

            {/* Page Header */}
            <div className="mb-20 max-w-4xl relative">
                <div className="space-y-6">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-[0.2em]">
                        Help Center
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                        Common Questions
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Clear answers to your questions about our process, services, and approach.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* LEFT SIDEBAR */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="sticky top-32 space-y-10">
                        {/* Search */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-0 pr-4 py-4 bg-transparent border-b border-border text-lg focus:border-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                            />
                            <FaSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                        </div>

                        {/* Categories (Desktop) */}
                        <div className="hidden lg:flex flex-col space-y-2">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Categories</h4>
                            {!isLoading && categories.map(cat => {
                                const Icon = CATEGORY_ICONS[cat] || HelpCircle;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        className={`text-left py-3 px-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${activeCategory === cat
                                            ? 'bg-secondary text-primary font-medium shadow-sm translate-x-2'
                                            : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* 4. Did You Know Widget */}
                        <div className="hidden lg:block">
                            <DidYouKnowWidget />
                        </div>

                        {/* Categories (Mobile) */}
                        {!isLoading && categories.length > 1 && (
                            <div className="lg:hidden flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium border transition-colors ${activeCategory === cat
                                            ? 'bg-foreground text-background border-foreground'
                                            : 'bg-transparent text-muted-foreground border-border'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Desktop Contact CTA */}
                        <div className="hidden lg:block pt-8 border-t border-border">
                            <p className="text-muted-foreground mb-4">Can't find what you need?</p>
                            <Link
                                href="/contact"
                                className="text-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-2 group"
                            >
                                Contact Support
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT: FAQ List */}
                <div className="lg:col-span-8">
                    <div className="space-y-2">
                        {isLoading ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="py-8 border-b border-border">
                                    <Skeleton className="h-8 w-3/4 mb-4 rounded" />
                                    <Skeleton className="h-4 w-full rounded" />
                                </div>
                            ))
                        ) : filteredFaqs.length > 0 ? (
                            <div className="space-y-0">
                                {filteredFaqs.map((faq, index) => (
                                    <FaqItem
                                        key={faq._id}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === faq._id}
                                        toggle={() => toggleFaq(faq._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center">
                                <p className="text-xl text-muted-foreground">No questions found matching your search.</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                    className="mt-4 text-primary hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Mobile Contact CTA */}
                    <div className="lg:hidden mt-20 pt-10 border-t border-border text-center">
                        <p className="text-muted-foreground mb-4">Still have questions?</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-foreground text-background px-8 py-3 rounded-full font-semibold"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqPage;
