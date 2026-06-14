import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  getAllProducts,
  getProductById,
  getCartItems,
  addToCart,
  updateCartItem,
  removeCartItem,
  subscribeToNewsletter,
} from "./db";

export const productsRouter = router({
  // Get all products
  getAll: publicProcedure.query(async () => {
    return await getAllProducts();
  }),

  // Get product by ID
  getById: publicProcedure.input(z.number()).query(async ({ input }) => {
    return await getProductById(input);
  }),

  // Get cart items for current user
  getCart: protectedProcedure.query(async ({ ctx }) => {
    const cartItemsData = await getCartItems(ctx.user.id);
    
    // Fetch product details for each cart item
    const cartWithProducts = await Promise.all(
      cartItemsData.map(async (item) => {
        const product = await getProductById(item.productId);
        return {
          ...item,
          product,
        };
      })
    );

    return cartWithProducts;
  }),

  // Add to cart
  addToCart: protectedProcedure
    .input(z.object({ productId: z.number(), quantity: z.number().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await addToCart(ctx.user.id, input.productId, input.quantity);
    }),

  // Update cart item quantity
  updateCartItem: protectedProcedure
    .input(z.object({ cartItemId: z.number(), quantity: z.number().min(1) }))
    .mutation(async ({ input }) => {
      return await updateCartItem(input.cartItemId, input.quantity);
    }),

  // Remove from cart
  removeFromCart: protectedProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      return await removeCartItem(input);
    }),

  // Subscribe to newsletter
  subscribeNewsletter: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      try {
        await subscribeToNewsletter(input.email);
        return { success: true };
      } catch (error) {
        return { success: false, error: "Email already subscribed" };
      }
    }),
});
