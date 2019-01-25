export default (
  message: string,
  success: string,
  status: number,
  data: any
) => ({
  Message: message,
  Success: success,
  Status: status,
  Data: data
});
