"use client";

import { useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex px-5 h-[80vh] w-full flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Something went wrong!
            </h2>
            <p className="text-muted-foreground text-lg max-w-[500px]">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            <div className="flex gap-4">
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    variant="contained"
                    sx={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-primary-foreground)"
                    }}
                >
                    Try again
                </Button>
                <Link href="/">
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "var(--color-border)",
                            color: "var(--color-foreground)"
                        }}
                    >
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
