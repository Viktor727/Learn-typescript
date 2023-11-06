enum Statuses {
  success = "success",
  failed = "failed",
}

interface PaymentRequest {
  sum: number;
  from: number;
  to: number;
}

type SuccessResponse = {
  status: Statuses.success;
  data: PaymentRequest | {
    databaseId: number;
  };
};

interface FailedResponse {
  status: Statuses.failed;
  data: {
    errorMessage: string;
    errorCode: number;
  };
}

type PaymentResponses = SuccessResponse | FailedResponse;


const responseSuccess: PaymentResponses = {
  status: Statuses.success,
  data: {
    databaseId: 1,
    sum: 4,
    from: 5,
    to: 1,
  }
};

const responseFailed: PaymentResponses = {
  status: Statuses.failed,
  data: {
    errorMessage: "Hello it is error",
    errorCode: 900
  },
};