import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

export const useCartStore = create(
	devtools(
		combine({ cartItems: [] }, (set) => {
			return {
				// FIX ADDING THE SAME PRODUCT BUT WITH DIFFERENT OPTIONS
				addItemToCart: (newItem, initialQuantity = 1) => {
					set((state) => {
						const existingItemId = state.cartItems.findIndex(
							(item) => item.id === newItem.id
						);
						if (existingItemId >= 0) {
							return {
								cartItems: state.cartItems.map((item, i) =>
									i === existingItemId
										? {
												...item,
												quantity:
													item.quantity < 10
														? item.quantity + 1
														: 10,
										  }
										: item
								),
							};
						}
						return {
							cartItems: [
								...state.cartItems,
								{ ...newItem, quantity: initialQuantity },
							],
						};
					});
				},

				removeItem: (itemId, itemCapacity) => {
					set((state) => ({
						cartItems: [
							...state.cartItems.filter(
								(ojb) =>
									ojb.id !== itemId || ojb.capacity !== itemCapacity
							),
						],
					}));
				},

				resetCart: () => {
					set(() => ({ cartItems: [] }));
				},
			};
		})
	)
);
