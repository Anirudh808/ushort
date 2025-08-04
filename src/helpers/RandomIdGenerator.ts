export default function generateUniqueId() {
  // Generate a random number and convert it to a base-36 string (alphanumeric)
  // substring(2) removes the "0." prefix
  const randomPart = Math.random().toString(36).substring(2);

  // Get the current timestamp in milliseconds
  const timestampPart = Date.now().toString(36);

  // Combine parts and take the first 6 characters
  // This combines randomness with a time-based element for better uniqueness
  const combinedId = (randomPart + timestampPart).substring(0, 6);

  // Ensure the ID is exactly 6 characters long and handle cases where
  // combinedId might be shorter than 6 characters (e.g., if randomPart is very short)
  if (combinedId.length < 6) {
    // Pad with random characters if needed
    return (
      combinedId +
      Math.random()
        .toString(36)
        .substring(2, 2 + (6 - combinedId.length))
    );
  }

  return combinedId;
}
