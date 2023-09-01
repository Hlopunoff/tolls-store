export interface ICategory {
  id: string;
  categoryName: string;
  categoryImage: string;
  subCategories: Omit<ICategory, 'subCategories'>[];
}
