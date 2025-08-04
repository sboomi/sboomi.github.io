import { useSubmit } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	email: z.email("Not a proper email address"),
	subject: z.string().min(5, "Title must be at least 5 characters long"),
	message: z
		.string()
		.min(15, "You message is too short (15 characters min)")
		.max(3000, "Message must not go above 3000 characters."),
});

const Contact: React.FC = () => {
	// const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
	// if (state.succeeded) {
	//   return <p>Thank you for your message!</p>;
	// }

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			subject: "",
			message: "",
			email: "",
		},
	});

	const onSubmit = useSubmit<z.infer<typeof formSchema>>(
		import.meta.env.VITE_FORMSPREE_FORM_ID as string,
		{
			onError(errs) {
				const formErrs = errs.getFormErrors();
				for (const { code, message } of formErrs) {
					form.setError(`root.${code}`, {
						type: code,
						message,
					});
				}

				const fieldErrs = errs.getAllFieldErrors();
				for (const [field, errs] of fieldErrs) {
					form.setError(field, {
						message: errs.map((e) => e.message).join(", "),
					});
				}
			},
		},
	);

	return (
		<Layout>
			<div className="space-y-8">
				<h1 className="text-3xl font-bold">Contact Form</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="myname@example.com"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Your email (ie. "example@example.com")
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<FormControl>
										<Input placeholder="My message's title" {...field} />
									</FormControl>
									<FormDescription>The subject title</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your message</FormLabel>
									<FormControl>
										<Textarea placeholder="Type something!" {...field} />
									</FormControl>
									<FormDescription>
										Must be between 15 and 3000 characters.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						{form.formState.isSubmitting ? (
							<Button disabled>Please wait</Button>
						) : (
							<Button type="submit">Submit</Button>
						)}
					</form>
				</Form>
				{form.formState.isSubmitSuccessful ? (
					<p>Message successfully sent! Would you like to send another</p>
				) : null}
			</div>
		</Layout>
	);
};

export default Contact;
