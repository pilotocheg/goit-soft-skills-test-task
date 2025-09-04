export const formatPrice = (price) => {
  if (!price || price <= 0) return "€0,00";

  // Convert to string and add comma formatting
  const formatted = price.toFixed(2).replace(".", ",");
  return `€${formatted}`;
};

export const formatLocation = (location) => {
  if (!location) return "N/A";

  // Split by comma and reverse for "Country, City" format
  const parts = location.split(", ");
  if (parts.length === 2) {
    return `${parts[1]}, ${parts[0]}`;
  }
  return location;
};

export const formatRating = (rating) => {
  return rating ? rating.toFixed(1) : "N/A";
};

export const formatReviewCount = (count) => {
  if (!count || count <= 0) return "No reviews";
  return count === 1 ? "1 Review" : `${count} Reviews`;
};
