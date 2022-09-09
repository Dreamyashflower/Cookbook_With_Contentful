import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function IngredientsTable({ recipe }) {
  return documentToReactComponents(recipe.fields.ingredientsTable);
}

export default IngredientsTable;
