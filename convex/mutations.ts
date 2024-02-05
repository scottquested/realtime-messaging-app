import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const sendMessage = mutation({
	args: {
		message: v.string(),
	},
	handler: async (ctx, { message }) => {
		const user = await ctx.auth.getUserIdentity();

		if (!user) {
			throw new ConvexError("You must be logged in to send a message");
		}

		await ctx.db.insert("messages", {
			message,
			userId: user?.subject,
		});
	},
});
