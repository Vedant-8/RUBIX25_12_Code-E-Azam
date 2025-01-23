import React from "react";

const ProductRow = ({ product, onEdit }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4">{product.id}</td>
      <td className="p-4">{product.name}</td>
      <td className="p-4">{product.category}</td>
      <td className="p-4">₹ git{product.price.toFixed(2)}</td>
      <td className="p-4">{product.stock}</td>
      <td className="p-4">{product.rating}</td>
      <td className="p-4">
        <button
          onClick={() => onEdit(product)}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
