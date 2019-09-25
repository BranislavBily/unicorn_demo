const createItemDtoInType = shape( {
  name: string().isRequired(),
  price: integer().isRequired(),
  description: string()
});
