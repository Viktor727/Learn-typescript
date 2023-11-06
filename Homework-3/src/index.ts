enum Statuses {
  "success",
  "failed",
}

interface PaymentRequest {
  sum: number;
  from: number;
  to: number;
}

interface SuccessResponse {
  status: Statuses;
  data: {
    databaseId: number;
    sum: number;
    from: number;
    to: number;
  };
}

interface FailedResponse {
  status: Statuses;
  data: {
    errorMessage: string;
    errorCode: number;
  };
}

type PaymentResponses = SuccessResponse | FailedResponse;
