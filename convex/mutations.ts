import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const sendMessage = mutation({
	args: {
		message: v.string(),
	},
	handler: async (ctx, { message }) => {
		await ctx.db.insert("messages", {
			message,
		});
	},
});
