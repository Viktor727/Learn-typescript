enum Statuses {
  success = "success",
  failed = "failed",
}

interface IPaymentRequest {
  sum: number;
  from: number;
  to: number;
}

interface ISuccessData extends IPaymentRequest {
  databaseId: number;
}

interface IFailedData {
  errorMessage: string;
  errorCode: number;
}

interface ISuccessResponse {
  status: Statuses.success;
  data: ISuccessData;
}

interface IFailedResponse {
  status: Statuses.failed;
  data: IFailedData;
}

type TPaymentResponses = ISuccessResponse | IFailedResponse;

const responseSuccess: TPaymentResponses = {
  status: Statuses.success,
  data: {
    sum: 4,
    from: 5,
    to: 1,
    databaseId: 1,
  },
};

const responseFailed: TPaymentResponses = {
  status: Statuses.failed,
  data: {
    errorMessage: "Hello it is error",
    errorCode: 900,
  },
};

// ТОЙ САМИЙ КОД, ЩО Й ЗВЕРХУ ТІЛЬКИ ВНИЗУ ІМЕНІ НАПИСАНІ ПО-ІНШОМУ: НЕ СТАВИВ T та I спереду 
// - і прикол в тому, що різниця тільки в назвах interface, type, але зверху код працює, а знизу код не працює - це якась АНОМАЛІЯ


// enum Statuses {
//   success = "success",
//   failed = "failed",
// }

// interface PaymentRequest {
//   sum: number;
//   from: number;
//   to: number;
// }

// interface SuccessData extends PaymentRequest {
//   databaseId: number;
// }

// interface FailedData {
//   errorMessage: string;
//   errorCode: number;
// }

// interface SuccessResponse {
//   status: Statuses.success;
//   data: SuccessData;
// }

// interface FailedResponse {
//   status: Statuses.failed;
//   data: FailedData;
// }

// type PaymentResponses = SuccessResponse | FailedResponse;

// const responseSuccess: PaymentResponses = {
//   status: Statuses.success,
//   data: {
//     sum: 4,
//     from: 5,
//     to: 1,
//     databaseId: 1,
//   },
// };

// const responseFailed: PaymentResponses = {
//   status: Statuses.failed,
//   data: {
//     errorMessage: "Hello it is error",
//     errorCode: 900,
//   },
// };
