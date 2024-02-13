export class CreateStoreDto {
  id: string;
  userId: string;
  name: string;
  storeUrl: string;
  cardFee: number;
  checkoutFee: number;
  gatewayFee: number;
}
