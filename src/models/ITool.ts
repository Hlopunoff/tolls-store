export interface ITool {
  id: string;
  data: {
    title: string;
    description: string;
    currPrice: number;
    prevPrice: number;
    images: {
      id: string;
      path: string;
    };
    inStock: boolean;
    isNew: boolean;
    characteristics: {
      title: string;
      value: string;
    }[];
    categoryId: string;
    subCategoryId: string;
  };
}
