'use client'
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Orb from "@/components/vapi/orb";

export default function TestPage() {    
    const params = useParams();
    const id = params.id
    console.log("ID:", id);

    const supabase = createClient();
    const age = 30;
    const language = "english";
    const gender = 'male'

    useEffect(() => {
        async function fetchTasks() {
            const { data, error } = await supabase
                .from("tasks")
                .select('*')
                .eq('id', id)

            if (error) {
                console.error("Error fetching tasks:", error);
            }
            else {
                console.log("Tasks fetched:", data);
            }
        }
        fetchTasks();
    })

    return (
        <div>
            <Orb />
        </div>
    );
}