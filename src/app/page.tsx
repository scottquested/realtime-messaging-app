"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "convex/react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../convex/_generated/api";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
	message: z.string().trim().min(1),
});

export default function Home() {
	const messages = useQuery(api.queries.getMessages);
	const sendMessage = useMutation(api.mutations.sendMessage);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await sendMessage({ message: data.message });
			form.reset();
		} catch (error) {
			console.log("error: ", error);
		}
	};
	return (
		<main className="p-24 min-h-svh">
			<h1 className="text-4xl font-bold text-center mb-24">
				Realtime Messaging App
			</h1>
			<div className="grid grid-cols-2 h-full gap-10">
				<Card className="p-10 h-full">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex w-full items-center space-x-2 relative"
						>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => {
									return (
										<FormItem className="w-full">
											<FormControl>
												<Input placeholder="message" {...field} />
											</FormControl>
											<FormMessage className="absolute bottom-[-1.5rem] left-0" />
										</FormItem>
									);
								}}
							/>
							<Button type="submit">
								<Send className="size-4" />
							</Button>
						</form>
					</Form>
				</Card>
				<Card className="p-10 h-full">
					<ul>
						{messages &&
							messages.map((message) => {
								return <div key={message._id}>{message.message}</div>;
							})}
					</ul>
				</Card>
			</div>
		</main>
	);
}
