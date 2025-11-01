export async function expectWithMessage(
  assertion: () => Promise<unknown>,
  message: string
): Promise<void> {
  try {
    await assertion();
  } catch (error) {
    throw new Error(`${message}\nOriginal error: ${error}`);
  }
}
