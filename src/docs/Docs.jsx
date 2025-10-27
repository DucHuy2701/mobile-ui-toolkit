import React from "react";
import Button from "../components/Button";

export default function Docs(){
    return(
        <div style={{padding: 20}}>
            <h1>Mobile UI Toolkit - Docs (Day1)</h1>
            <section style={{marginTop: 16}}>
                <h3>Buttons</h3>
                <div style={{display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center"}}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="primary" size="lg">Large</Button>
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                </div>
            </section>
        </div>
    );
}