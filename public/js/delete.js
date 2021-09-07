const deleteProduct = async (event) => {
  if (event.target.hasAttribute('data-delete')) {
    const id = event.target.getAttribute('data-delete');

    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete project');
    }
  }
};

document.addEventListener('click', deleteProduct);