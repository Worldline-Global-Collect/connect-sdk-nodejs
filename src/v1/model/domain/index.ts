/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */

export interface APIError {
  category?: string | null;
  code?: string | null;
  httpStatusCode?: number | null;
  id?: string | null;
  message?: string | null;
  propertyName?: string | null;
  requestId?: string | null;
}

export interface AbstractBankTransferPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  additionalReference?: string | null;
}

export interface AbstractCardPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  acquirerPromotionCode?: string | null;
  authorizationMode?: string | null;
  customerReference?: string | null;
  initialSchemeTransactionId?: string | null;
  recurring?: CardRecurrenceDetails | null;
  /**
   * @deprecated Use recurring.recurringPaymentSequenceIndicator instead
   */
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  /**
   * @deprecated Use threeDSecure.skipAuthentication instead
   */
  skipAuthentication?: boolean | null;
  skipFraudService?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
  transactionChannel?: string | null;
  /**
   * @deprecated Use unscheduledCardOnFileSequenceIndicator instead
   */
  unscheduledCardOnFileIndicator?: string | null;
  unscheduledCardOnFileRequestor?: string | null;
  unscheduledCardOnFileSequenceIndicator?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractCashPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {}

export interface AbstractEInvoicePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  requiresApproval?: boolean | null;
}

export interface AbstractIndicator {
  name?: string | null;
  value?: string | null;
}

export interface AbstractOrderStatus {
  id?: string | null;
}

export interface AbstractPaymentMethodSpecificInput {
  paymentProductId?: number | null;
}

export interface AbstractPaymentMethodSpecificOutput {
  paymentProductId?: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractPayoutMethodSpecificInput {}

export interface AbstractRedirectPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  expirationPeriod?: number | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractRedirectPaymentProduct4101SpecificInput {}

export interface AbstractRedirectPaymentProduct838SpecificInput {
  interoperabilityData?: string | null;
  interoperabilityToken?: string | null;
}

export interface AbstractRedirectPaymentProduct840SpecificInput {
  addressSelectionAtPayPal?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractSepaDirectDebitPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {}

export interface AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  /**
   * @deprecated Use existingUniqueMandateReference or mandate.uniqueMandateReference instead
   */
  mandateReference?: string | null;
}

export interface AbstractThreeDSecure {
  authenticationAmount?: AmountOfMoney | null;
  authenticationFlow?: string | null;
  challengeCanvasSize?: string | null;
  challengeIndicator?: string | null;
  exemptionRequest?: string | null;
  priorThreeDSecureData?: ThreeDSecureData | null;
  sdkData?: SdkDataInput | null;
  skipAuthentication?: boolean | null;
  transactionRiskLevel?: string | null;
}

export interface AbstractToken {
  alias?: string | null;
}

export interface AccountFundingRecipient {
  accountNumber?: string | null;
  accountNumberType?: string | null;
  address?: Address | null;
  dateOfBirth?: string | null;
  name?: AfrName | null;
  partialPan?: string | null;
}

export interface AccountOnFile {
  attributes?: AccountOnFileAttribute[] | null;
  displayHints?: AccountOnFileDisplayHints | null;
  id?: number | null;
  paymentProductId?: number | null;
}

export interface AccountOnFileAttribute extends KeyValuePair {
  mustWriteReason?: string | null;
  status?: string | null;
}

export interface AccountOnFileDisplayHints {
  labelTemplate?: LabelTemplateElement[] | null;
  logo?: string | null;
}

export interface AdditionalOrderInput {
  accountFundingRecipient?: AccountFundingRecipient | null;
  airlineData?: AirlineData | null;
  installments?: Installments | null;
  /**
   * @deprecated Use Order.shoppingCart.amountBreakdown instead
   */
  level3SummaryData?: Level3SummaryData | null;
  /**
   * @deprecated No replacement
   */
  loanRecipient?: LoanRecipient | null;
  lodgingData?: LodgingData | null;
  /**
   * @deprecated Use installments.numberOfInstallments instead
   */
  numberOfInstallments?: number | null;
  orderDate?: string | null;
  typeInformation?: OrderTypeInformation | null;
}

export interface AdditionalOrderInputAirlineData {
  airlineData?: AirlineData | null;
  lodgingData?: LodgingData | null;
}

export interface Address {
  additionalInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  state?: string | null;
  stateCode?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface AddressPersonal extends Address {
  name?: PersonalName | null;
}

export interface AfrName {
  firstName?: string | null;
  surname?: string | null;
}

export interface AirlineData {
  agentNumericCode?: string | null;
  code?: string | null;
  flightDate?: string | null;
  flightLegs?: AirlineFlightLeg[] | null;
  invoiceNumber?: string | null;
  isETicket?: boolean | null;
  /**
   * @deprecated Use Order.customer.accountType instead
   */
  isRegisteredCustomer?: boolean | null;
  isRestrictedTicket?: boolean | null;
  isThirdParty?: boolean | null;
  issueDate?: string | null;
  merchantCustomerId?: string | null;
  name?: string | null;
  numberInParty?: number | null;
  passengerName?: string | null;
  passengers?: AirlinePassenger[] | null;
  placeOfIssue?: string | null;
  pnr?: string | null;
  pointOfSale?: string | null;
  posCityCode?: string | null;
  ticketDeliveryMethod?: string | null;
  ticketNumber?: string | null;
  totalFare?: number | null;
  totalFee?: number | null;
  totalTaxes?: number | null;
  travelAgencyName?: string | null;
}

export interface AirlineFlightLeg {
  airlineClass?: string | null;
  arrivalAirport?: string | null;
  arrivalTime?: string | null;
  carrierCode?: string | null;
  conjunctionTicket?: string | null;
  couponNumber?: string | null;
  date?: string | null;
  departureTime?: string | null;
  endorsementOrRestriction?: string | null;
  exchangeTicket?: string | null;
  fare?: string | null;
  fareBasis?: string | null;
  fee?: number | null;
  flightNumber?: string | null;
  number?: number | null;
  originAirport?: string | null;
  passengerClass?: string | null;
  /**
   * @deprecated Use passengerClass instead
   */
  serviceClass?: string | null;
  stopoverCode?: string | null;
  taxes?: number | null;
}

export interface AirlinePassenger {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
  title?: string | null;
}

export interface AmountBreakdown {
  amount?: number | null;
  type?: string | null;
}

export interface AmountOfMoney {
  amount?: number | null;
  currencyCode?: string | null;
}

export interface ApprovePaymentCardPaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentDirectDebitPaymentMethodSpecificInput extends ApprovePaymentPaymentMethodSpecificInput {}

export interface ApprovePaymentMobilePaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentNonSepaDirectDebitPaymentMethodSpecificInput extends ApprovePaymentDirectDebitPaymentMethodSpecificInput {}

export interface ApprovePaymentPaymentMethodSpecificInput {
  dateCollect?: string | null;
  token?: string | null;
}

export interface ApprovePaymentRequest {
  amount?: number | null;
  directDebitPaymentMethodSpecificInput?: ApprovePaymentNonSepaDirectDebitPaymentMethodSpecificInput | null;
  order?: OrderApprovePayment | null;
  sepaDirectDebitPaymentMethodSpecificInput?: ApprovePaymentSepaDirectDebitPaymentMethodSpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentSepaDirectDebitPaymentMethodSpecificInput extends ApprovePaymentDirectDebitPaymentMethodSpecificInput {}

export interface ApprovePayoutRequest {
  datePayout?: string | null;
}

export interface ApproveRefundRequest {
  amount?: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApproveTokenRequest extends MandateApproval {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthenticationIndicator extends AbstractIndicator {}

export interface BankAccount {
  accountHolderName?: string | null;
}

export interface BankAccountBban extends BankAccount {
  accountNumber?: string | null;
  bankCode?: string | null;
  bankName?: string | null;
  branchCode?: string | null;
  checkDigit?: string | null;
  countryCode?: string | null;
}

export interface BankAccountBbanRefund extends BankAccountBban {
  bankCity?: string | null;
  patronymicName?: string | null;
  swiftCode?: string | null;
}

export interface BankAccountIban extends BankAccount {
  iban?: string | null;
}

export interface BankData {
  newBankName?: string | null;
  reformattedAccountNumber?: string | null;
  reformattedBankCode?: string | null;
  reformattedBranchCode?: string | null;
}

export interface BankDetails {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankDetailsRequest extends BankDetails {}

export interface BankDetailsResponse {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  bankData?: BankData | null;
  swift?: Swift | null;
}

export interface BankRefundMethodSpecificInput {
  bankAccountBban?: BankAccountBbanRefund | null;
  bankAccountIban?: BankAccountIban | null;
  countryCode?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankTransferPaymentMethodSpecificInput extends AbstractBankTransferPaymentMethodSpecificInput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankTransferPaymentMethodSpecificInputBase extends AbstractBankTransferPaymentMethodSpecificInput {}

export interface BankTransferPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

export interface BankTransferPayoutMethodSpecificInput extends AbstractPayoutMethodSpecificInput {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  customer?: PayoutCustomer | null;
  payoutDate?: string | null;
  payoutText?: string | null;
  swiftCode?: string | null;
}

export interface BoletoBancarioRequirednessValidator {
  fiscalNumberLength?: number | null;
}

export interface BrowserData {
  colorDepth?: number | null;
  innerHeight?: string | null;
  innerWidth?: string | null;
  javaEnabled?: boolean | null;
  javaScriptEnabled?: boolean | null;
  screenHeight?: string | null;
  screenWidth?: string | null;
}

export interface CancelApprovalPaymentResponse {
  payment?: Payment | null;
}

export interface CancelPaymentCardPaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

export interface CancelPaymentMobilePaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

export interface CancelPaymentResponse {
  cardPaymentMethodSpecificOutput?: CancelPaymentCardPaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: CancelPaymentMobilePaymentMethodSpecificOutput | null;
  payment?: Payment | null;
}

export interface Capture extends AbstractOrderStatus {
  captureOutput?: CaptureOutput | null;
  status?: string | null;
  statusOutput?: CaptureStatusOutput | null;
}

export interface CaptureOutput extends OrderOutput {
  amountPaid?: number | null;
  amountReversed?: number | null;
  bankTransferPaymentMethodSpecificOutput?: BankTransferPaymentMethodSpecificOutput | null;
  cardPaymentMethodSpecificOutput?: CardPaymentMethodSpecificOutput | null;
  cashPaymentMethodSpecificOutput?: CashPaymentMethodSpecificOutput | null;
  paymentMethod?: string | null;
  redirectPaymentMethodSpecificOutput?: RedirectPaymentMethodSpecificOutput | null;
  reversalReason?: string | null;
  sepaDirectDebitPaymentMethodSpecificOutput?: SepaDirectDebitPaymentMethodSpecificOutput | null;
}

export interface CapturePaymentOrder {
  additionalInput?: CapturePaymentOrderAdditionalInput | null;
  references?: CapturePaymentOrderReferences | null;
}

export interface CapturePaymentOrderAdditionalInput {
  airlineData?: AirlineData | null;
  lodgingData?: LodgingData | null;
}

export interface CapturePaymentOrderReferences {
  merchantCaptureReference?: string | null;
}

export interface CapturePaymentRequest {
  amount?: number | null;
  isFinal?: boolean | null;
  order?: CapturePaymentOrder | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CaptureResponse extends Capture {}

export interface CaptureStatusOutput {
  isRefundable?: boolean | null;
  isRetriable?: boolean | null;
  providerRawOutput?: KeyValuePair[] | null;
  statusCode?: number | null;
  statusCodeChangeDateTime?: string | null;
}

export interface CapturesResponse {
  captures?: Capture[] | null;
}

export interface Card extends CardWithoutCvv {
  cvv?: string | null;
  partialPin?: string | null;
}

export interface CardEssentials {
  cardNumber?: string | null;
  cardholderName?: string | null;
  expiryDate?: string | null;
}

export interface CardFraudResults extends FraudResults {
  avsResult?: string | null;
  cvvResult?: string | null;
  fraugster?: FraugsterResults | null;
  retailDecisions?: FraudResultsRetailDecisions | null;
}

export interface CardPaymentMethodSpecificInput extends AbstractCardPaymentMethodSpecificInput {
  card?: Card | null;
  /**
   * @deprecated Use threeDSecure.externalCardholderAuthenticationData instead
   */
  externalCardholderAuthenticationData?: ExternalCardholderAuthenticationData | null;
  isRecurring?: boolean | null;
  merchantInitiatedReasonIndicator?: string | null;
  networkTokenData?: SchemeTokenData | null;
  /**
   * @deprecated Use threeDSecure.redirectionData.returnUrl instead
   */
  returnUrl?: string | null;
  threeDSecure?: ThreeDSecure | null;
}

export interface CardPaymentMethodSpecificInputBase extends AbstractCardPaymentMethodSpecificInput {
  threeDSecure?: ThreeDSecureBase | null;
}

export interface CardPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  authorisationCode?: string | null;
  card?: CardEssentials | null;
  fraudResults?: CardFraudResults | null;
  initialSchemeTransactionId?: string | null;
  networkTokenData?: NetworkTokenData | null;
  networkTokenUsed?: boolean | null;
  paymentAccountReference?: string | null;
  schemeTransactionId?: string | null;
  threeDSecureResults?: ThreeDSecureResults | null;
  token?: string | null;
}

export interface CardPayoutMethodSpecificInput extends AbstractPayoutMethodSpecificInput {
  card?: Card | null;
  paymentProductId?: number | null;
  recipient?: PayoutRecipient | null;
  token?: string | null;
}

export interface CardRecurrenceDetails {
  endDate?: string | null;
  minFrequency?: number | null;
  recurringPaymentSequenceIndicator?: string | null;
}

export interface CardWithoutCvv extends CardEssentials {
  issueNumber?: string | null;
}

export interface CashPaymentMethodSpecificInput extends AbstractCashPaymentMethodSpecificInput {
  /**
   * @deprecated No replacement
   */
  paymentProduct1503SpecificInput?: CashPaymentProduct1503SpecificInput | null;
  paymentProduct1504SpecificInput?: CashPaymentProduct1504SpecificInput | null;
  paymentProduct1521SpecificInput?: CashPaymentProduct1521SpecificInput | null;
  paymentProduct1522SpecificInput?: CashPaymentProduct1522SpecificInput | null;
  paymentProduct1523SpecificInput?: CashPaymentProduct1523SpecificInput | null;
  paymentProduct1524SpecificInput?: CashPaymentProduct1524SpecificInput | null;
  paymentProduct1526SpecificInput?: CashPaymentProduct1526SpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentMethodSpecificInputBase extends AbstractCashPaymentMethodSpecificInput {}

export interface CashPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

/**
 * @deprecated No replacement
 */
export interface CashPaymentProduct1503SpecificInput {
  /**
   * @deprecated No replacement, since Boleto Bancario no longer needs a return URL
   */
  returnUrl?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1504SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1521SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1522SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1523SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1524SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1526SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

export interface CashPaymentProductWithRedirectSpecificInputBase {
  returnUrl?: string | null;
}

export interface CompanyInformation {
  dateOfIncorporation?: string | null;
  name?: string | null;
  vatNumber?: string | null;
}

export interface CompletePaymentCardPaymentMethodSpecificInput {
  card?: CardWithoutCvv | null;
}

export interface CompletePaymentRequest {
  cardPaymentMethodSpecificInput?: CompletePaymentCardPaymentMethodSpecificInput | null;
  merchant?: Merchant | null;
  order?: Order | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CompletePaymentResponse extends CreatePaymentResult {}

export interface ContactDetails extends ContactDetailsBase {
  faxNumber?: string | null;
  mobilePhoneNumber?: string | null;
  phoneNumber?: string | null;
  workPhoneNumber?: string | null;
}

export interface ContactDetailsBase {
  emailAddress?: string | null;
  emailMessageType?: string | null;
}

export interface ContactDetailsRiskAssessment {
  emailAddress?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactDetailsToken extends ContactDetailsBase {}

export interface ConvertAmount {
  convertedAmount?: number | null;
}

export interface CreateDisputeRequest {
  amountOfMoney?: AmountOfMoney | null;
  contactPerson?: string | null;
  emailAddress?: string | null;
  replyTo?: string | null;
  requestMessage?: string | null;
}

export interface CreateHostedCheckoutRequest {
  bankTransferPaymentMethodSpecificInput?: BankTransferPaymentMethodSpecificInputBase | null;
  cardPaymentMethodSpecificInput?: CardPaymentMethodSpecificInputBase | null;
  cashPaymentMethodSpecificInput?: CashPaymentMethodSpecificInputBase | null;
  eInvoicePaymentMethodSpecificInput?: EInvoicePaymentMethodSpecificInputBase | null;
  fraudFields?: FraudFields | null;
  hostedCheckoutSpecificInput?: HostedCheckoutSpecificInput | null;
  merchant?: Merchant | null;
  mobilePaymentMethodSpecificInput?: MobilePaymentMethodSpecificInputHostedCheckout | null;
  order?: Order | null;
  redirectPaymentMethodSpecificInput?: RedirectPaymentMethodSpecificInputBase | null;
  sepaDirectDebitPaymentMethodSpecificInput?: SepaDirectDebitPaymentMethodSpecificInputBase | null;
}

export interface CreateHostedCheckoutResponse {
  RETURNMAC?: string | null;
  hostedCheckoutId?: string | null;
  invalidTokens?: string[] | null;
  merchantReference?: string | null;
  partialRedirectUrl?: string | null;
}

export interface CreateHostedMandateManagementRequest {
  createMandateInfo?: HostedMandateInfo | null;
  hostedMandateManagementSpecificInput?: HostedMandateManagementSpecificInput | null;
}

export interface CreateHostedMandateManagementResponse {
  RETURNMAC?: string | null;
  hostedMandateManagementId?: string | null;
  partialRedirectUrl?: string | null;
}

export interface CreateMandateBase {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  language?: string | null;
  recurrenceType?: string | null;
  signatureType?: string | null;
  uniqueMandateReference?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateMandateRequest extends CreateMandateWithReturnUrl {}

export interface CreateMandateResponse {
  mandate?: MandateResponse | null;
  merchantAction?: MandateMerchantAction | null;
}

export interface CreateMandateWithReturnUrl extends CreateMandateBase {
  returnUrl?: string | null;
}

export interface CreatePaymentProductSessionRequest {
  paymentProductSession302SpecificInput?: MobilePaymentProductSession302SpecificInput | null;
}

export interface CreatePaymentProductSessionResponse {
  paymentProductSession302SpecificOutput?: MobilePaymentProductSession302SpecificOutput | null;
}

export interface CreatePaymentRequest {
  bankTransferPaymentMethodSpecificInput?: BankTransferPaymentMethodSpecificInput | null;
  cardPaymentMethodSpecificInput?: CardPaymentMethodSpecificInput | null;
  cashPaymentMethodSpecificInput?: CashPaymentMethodSpecificInput | null;
  directDebitPaymentMethodSpecificInput?: NonSepaDirectDebitPaymentMethodSpecificInput | null;
  eInvoicePaymentMethodSpecificInput?: EInvoicePaymentMethodSpecificInput | null;
  encryptedCustomerInput?: string | null;
  fraudFields?: FraudFields | null;
  invoicePaymentMethodSpecificInput?: InvoicePaymentMethodSpecificInput | null;
  merchant?: Merchant | null;
  mobilePaymentMethodSpecificInput?: MobilePaymentMethodSpecificInput | null;
  order?: Order | null;
  redirectPaymentMethodSpecificInput?: RedirectPaymentMethodSpecificInput | null;
  sepaDirectDebitPaymentMethodSpecificInput?: SepaDirectDebitPaymentMethodSpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreatePaymentResponse extends CreatePaymentResult {}

export interface CreatePaymentResult {
  creationOutput?: PaymentCreationOutput | null;
  merchantAction?: MerchantAction | null;
  payment?: Payment | null;
}

export interface CreatePayoutRequest {
  /**
   * @deprecated Moved to PayoutDetails
   */
  amountOfMoney?: AmountOfMoney | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  bankAccountBban?: BankAccountBban | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  bankAccountIban?: BankAccountIban | null;
  bankTransferPayoutMethodSpecificInput?: BankTransferPayoutMethodSpecificInput | null;
  cardPayoutMethodSpecificInput?: CardPayoutMethodSpecificInput | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  customer?: PayoutCustomer | null;
  merchant?: PayoutMerchant | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  payoutDate?: string | null;
  payoutDetails?: PayoutDetails | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  payoutText?: string | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  references?: PayoutReferences | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  swiftCode?: string | null;
}

export interface CreateTokenRequest {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  encryptedCustomerInput?: string | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebitWithoutCreditor | null;
}

export interface CreateTokenResponse {
  isNewToken?: boolean | null;
  originalPaymentId?: string | null;
  token?: string | null;
}

export interface CreatedPaymentOutput {
  displayedData?: DisplayedData | null;
  isCheckedRememberMe?: boolean | null;
  payment?: Payment | null;
  paymentCreationReferences?: PaymentCreationReferences | null;
  /**
   * @deprecated Use Payment.statusOutput.statusCategory instead
   */
  paymentStatusCategory?: string | null;
  tokenizationSucceeded?: boolean | null;
  tokens?: string | null;
}

export interface Creditor {
  additionalAddressInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  iban?: string | null;
  id?: string | null;
  name?: string | null;
  referenceParty?: string | null;
  referencePartyId?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface Customer extends CustomerBase {
  account?: CustomerAccount | null;
  accountType?: string | null;
  billingAddress?: Address | null;
  contactDetails?: ContactDetails | null;
  device?: CustomerDevice | null;
  fiscalNumber?: string | null;
  isCompany?: boolean | null;
  isPreviousCustomer?: boolean | null;
  locale?: string | null;
  personalInformation?: PersonalInformation | null;
  /**
   * @deprecated Use Order.shipping.address instead
   */
  shippingAddress?: AddressPersonal | null;
}

export interface CustomerAccount {
  authentication?: CustomerAccountAuthentication | null;
  changeDate?: string | null;
  changedDuringCheckout?: boolean | null;
  createDate?: string | null;
  hadSuspiciousActivity?: boolean | null;
  hasForgottenPassword?: boolean | null;
  hasPassword?: boolean | null;
  passwordChangeDate?: string | null;
  passwordChangedDuringCheckout?: boolean | null;
  paymentAccountOnFile?: PaymentAccountOnFile | null;
  paymentAccountOnFileType?: string | null;
  paymentActivity?: CustomerPaymentActivity | null;
}

export interface CustomerAccountAuthentication {
  data?: string | null;
  method?: string | null;
  utcTimestamp?: string | null;
}

export interface CustomerAccountRiskAssessment {
  hasForgottenPassword?: boolean | null;
  hasPassword?: boolean | null;
}

export interface CustomerApprovePayment {
  accountType?: string | null;
}

export interface CustomerBase {
  companyInformation?: CompanyInformation | null;
  merchantCustomerId?: string | null;
  /**
   * @deprecated Use companyInformation.vatNumber instead
   */
  vatNumber?: string | null;
}

export interface CustomerDevice {
  acceptHeader?: string | null;
  browserData?: BrowserData | null;
  defaultFormFill?: string | null;
  deviceFingerprintTransactionId?: string | null;
  ipAddress?: string | null;
  locale?: string | null;
  timezoneOffsetUtcMinutes?: string | null;
  userAgent?: string | null;
}

export interface CustomerDeviceRiskAssessment {
  defaultFormFill?: string | null;
  deviceFingerprintTransactionId?: string | null;
}

export interface CustomerPaymentActivity {
  numberOfPaymentAttemptsLast24Hours?: number | null;
  numberOfPaymentAttemptsLastYear?: number | null;
  numberOfPurchasesLast6Months?: number | null;
}

export interface CustomerRiskAssessment {
  account?: CustomerAccountRiskAssessment | null;
  accountType?: string | null;
  billingAddress?: Address | null;
  contactDetails?: ContactDetailsRiskAssessment | null;
  device?: CustomerDeviceRiskAssessment | null;
  isPreviousCustomer?: boolean | null;
  locale?: string | null;
  personalInformation?: PersonalInformationRiskAssessment | null;
  /**
   * @deprecated Use Order.shipping.address instead
   */
  shippingAddress?: AddressPersonal | null;
}

export interface CustomerToken extends CustomerBase {
  billingAddress?: Address | null;
  personalInformation?: PersonalInformationToken | null;
}

export interface CustomerTokenWithContactDetails extends CustomerToken {
  contactDetails?: ContactDetailsToken | null;
}

export interface CybersourceDecisionManager {
  clauseName?: string | null;
  fraudScore?: number | null;
  policyApplied?: string | null;
  reasonCodes?: string[] | null;
}

export interface Debtor {
  additionalAddressInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  firstName?: string | null;
  houseNumber?: string | null;
  state?: string | null;
  stateCode?: string | null;
  street?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
  zip?: string | null;
}

export interface DecryptedPaymentData {
  /**
   * @deprecated Use decryptedPaymentData.paymentMethod instead
   */
  authMethod?: string | null;
  cardholderName?: string | null;
  cryptogram?: string | null;
  dpan?: string | null;
  eci?: number | null;
  expiryDate?: string | null;
  pan?: string | null;
  paymentMethod?: string | null;
}

export interface DeviceFingerprintDetails {
  paymentId?: string | null;
  rawDeviceFingerprintOutput?: string | null;
}

export interface DeviceFingerprintRequest {
  collectorCallback?: string | null;
}

export interface DeviceFingerprintResponse {
  deviceFingerprintTransactionId?: string | null;
  html?: string | null;
}

export interface DeviceRenderOptions {
  sdkInterface?: string | null;
  /**
   * @deprecated Use deviceRenderOptions.sdkUiTypes instead
   */
  sdkUiType?: string | null;
  sdkUiTypes?: string[] | null;
}

export interface Directory {
  entries?: DirectoryEntry[] | null;
}

export interface DirectoryEntry {
  countryNames?: string[] | null;
  issuerId?: string | null;
  issuerList?: string | null;
  issuerName?: string | null;
}

export interface DisplayedData {
  displayedDataType?: string | null;
  renderingData?: string | null;
  showData?: KeyValuePair[] | null;
}

export interface Dispute {
  disputeOutput?: DisputeOutput | null;
  id?: string | null;
  paymentId?: string | null;
  status?: string | null;
  statusOutput?: DisputeStatusOutput | null;
}

export interface DisputeCreationDetail {
  disputeCreationDate?: string | null;
  disputeOriginator?: string | null;
  userName?: string | null;
}

export interface DisputeOutput {
  amountOfMoney?: AmountOfMoney | null;
  contactPerson?: string | null;
  creationDetails?: DisputeCreationDetail | null;
  emailAddress?: string | null;
  files?: HostedFile[] | null;
  reference?: DisputeReference | null;
  replyTo?: string | null;
  requestMessage?: string | null;
  responseMessage?: string | null;
}

export interface DisputeReference {
  merchantOrderId?: string | null;
  merchantReference?: string | null;
  paymentReference?: string | null;
  providerId?: string | null;
  providerReference?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DisputeResponse extends Dispute {}

export interface DisputeStatusOutput {
  isCancellable?: boolean | null;
  statusCategory?: string | null;
  statusCode?: number | null;
  statusCodeChangeDateTime?: string | null;
}

export interface DisputesResponse {
  disputes?: Dispute[] | null;
}

export interface EInvoicePaymentMethodSpecificInput extends AbstractEInvoicePaymentMethodSpecificInput {
  acceptedTermsAndConditions?: boolean | null;
  paymentProduct9000SpecificInput?: EInvoicePaymentProduct9000SpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EInvoicePaymentMethodSpecificInputBase extends AbstractEInvoicePaymentMethodSpecificInput {}

export interface EInvoicePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
  paymentProduct9000SpecificOutput?: EInvoicePaymentProduct9000SpecificOutput | null;
}

export interface EInvoicePaymentProduct9000SpecificInput {
  bankAccountIban?: BankAccountIban | null;
  installmentId?: string | null;
}

export interface EInvoicePaymentProduct9000SpecificOutput {
  installmentId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmptyValidator {}

export interface ErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
}

export interface ExemptionOutput {
  exemptionRaised?: string | null;
  exemptionRejectionReason?: string | null;
  exemptionRequest?: string | null;
}

export interface ExternalCardholderAuthenticationData {
  acsTransactionId?: string | null;
  appliedExemption?: string | null;
  cavv?: string | null;
  cavvAlgorithm?: string | null;
  directoryServerTransactionId?: string | null;
  eci?: number | null;
  schemeRiskScore?: number | null;
  threeDSecureVersion?: string | null;
  /**
   * @deprecated No replacement
   */
  threeDServerTransactionId?: string | null;
  validationResult?: string | null;
  xid?: string | null;
}

export interface FindPaymentsResponse {
  limit?: number | null;
  offset?: number | null;
  payments?: Payment[] | null;
  totalCount?: number | null;
}

export interface FindPayoutsResponse {
  limit?: number | null;
  offset?: number | null;
  payouts?: PayoutResult[] | null;
  totalCount?: number | null;
}

export interface FindRefundsResponse {
  limit?: number | null;
  offset?: number | null;
  refunds?: RefundResult[] | null;
  totalCount?: number | null;
}

export interface FixedListValidator {
  allowedValues?: string[] | null;
}

export interface FraudFields {
  /**
   * @deprecated For risk assessments there is no replacement. For other calls, use Order.shipping.addressIndicator instead
   */
  addressesAreIdentical?: boolean | null;
  blackListData?: string | null;
  /**
   * @deprecated This should be the same as Order.customer.billingAddress
   */
  cardOwnerAddress?: Address | null;
  customerIpAddress?: string | null;
  /**
   * @deprecated Use Order.customer.device.defaultFormFill instead
   */
  defaultFormFill?: string | null;
  /**
   * @deprecated No replacement
   */
  deviceFingerprintActivated?: boolean | null;
  /**
   * @deprecated Use Order.customer.device.deviceFingerprintTransactionId instead
   */
  deviceFingerprintTransactionId?: string | null;
  giftCardType?: string | null;
  giftMessage?: string | null;
  /**
   * @deprecated Use Order.customer.account.hasForgottenPassword instead
   */
  hasForgottenPwd?: boolean | null;
  /**
   * @deprecated Use Order.customer.account.hasPassword instead
   */
  hasPassword?: boolean | null;
  /**
   * @deprecated Use Order.customer.isPreviousCustomer instead
   */
  isPreviousCustomer?: boolean | null;
  orderTimezone?: string | null;
  /**
   * @deprecated Use Order.shipping.comments instead
   */
  shipComments?: string | null;
  /**
   * @deprecated Use Order.shipping.trackingNumber instead
   */
  shipmentTrackingNumber?: string | null;
  /**
   * @deprecated No replacement
   */
  shippingDetails?: FraudFieldsShippingDetails | null;
  userData?: string[] | null;
  /**
   * @deprecated Use Merchant.websiteUrl instead
   */
  website?: string | null;
}

/**
 * @deprecated No replacement
 */
export interface FraudFieldsShippingDetails {
  /**
   * @deprecated No replacement
   */
  methodDetails?: string | null;
  /**
   * @deprecated No replacement
   */
  methodSpeed?: number | null;
  /**
   * @deprecated No replacement
   */
  methodType?: number | null;
}

export interface FraudResults {
  cybersourceDecisionManager?: CybersourceDecisionManager | null;
  fraudServiceResult?: string | null;
  inAuth?: InAuth | null;
  microsoftFraudProtection?: MicrosoftFraudResults | null;
}

export interface FraudResultsRetailDecisions {
  fraudCode?: string | null;
  fraudNeural?: string | null;
  fraudRCF?: string | null;
}

export interface FraugsterResults {
  fraudInvestigationPoints?: string | null;
  fraudScore?: number | null;
}

export interface Frequency {
  interval?: string | null;
  intervalFrequency?: number | null;
}

export interface GPayThreeDSecure {
  challengeCanvasSize?: string | null;
  challengeIndicator?: string | null;
  exemptionRequest?: string | null;
  redirectionData?: RedirectionData | null;
  skipAuthentication?: boolean | null;
}

export interface GetCustomerDetailsRequest {
  countryCode?: string | null;
  values?: KeyValuePair[] | null;
}

export interface GetCustomerDetailsResponse {
  city?: string | null;
  country?: string | null;
  emailAddress?: string | null;
  firstName?: string | null;
  fiscalNumber?: string | null;
  languageCode?: string | null;
  phoneNumber?: string | null;
  street?: string | null;
  surname?: string | null;
  zip?: string | null;
}

export interface GetHostedCheckoutResponse {
  createdPaymentOutput?: CreatedPaymentOutput | null;
  status?: string | null;
}

export interface GetHostedMandateManagementResponse {
  mandate?: MandateResponse | null;
  status?: string | null;
}

export interface GetIINDetailsRequest {
  bin?: string | null;
  paymentContext?: PaymentContext | null;
}

export interface GetIINDetailsResponse {
  coBrands?: IINDetail[] | null;
  countryCode?: string | null;
  isAllowedInContext?: boolean | null;
  paymentProductId?: number | null;
}

export interface GetInstallmentRequest {
  amountOfMoney?: AmountOfMoney | null;
  bin?: string | null;
  countryCode?: string | null;
  paymentProductId?: number | null;
}

export interface GetMandateResponse {
  mandate?: MandateResponse | null;
}

export interface GetPrivacyPolicyResponse {
  htmlContent?: string | null;
}

export interface GiftCardPurchase {
  amountOfMoney?: AmountOfMoney | null;
  numberOfGiftCards?: number | null;
}

export interface HostedCheckoutSpecificInput {
  isRecurring?: boolean | null;
  locale?: string | null;
  paymentProductFilters?: PaymentProductFiltersHostedCheckout | null;
  recurringPaymentsData?: RecurringPaymentsData | null;
  returnCancelState?: boolean | null;
  returnUrl?: string | null;
  showResultPage?: boolean | null;
  tokens?: string | null;
  validateShoppingCart?: boolean | null;
  variant?: string | null;
}

export interface HostedCheckoutSpecificOutput {
  hostedCheckoutId?: string | null;
  variant?: string | null;
}

export interface HostedFile {
  fileName?: string | null;
  fileSize?: string | null;
  fileType?: string | null;
  id?: string | null;
}

export interface HostedMandateInfo {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  recurrenceType?: string | null;
  signatureType?: string | null;
  uniqueMandateReference?: string | null;
}

export interface HostedMandateManagementSpecificInput {
  locale?: string | null;
  returnUrl?: string | null;
  showResultPage?: boolean | null;
  variant?: string | null;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IINDetail {
  isAllowedInContext?: boolean | null;
  paymentProductId?: number | null;
}

export interface InAuth {
  deviceCategory?: string | null;
  deviceId?: string | null;
  riskScore?: string | null;
  trueIpAddress?: string | null;
  trueIpAddressCountry?: string | null;
}

export interface InstallmentDisplayHints {
  displayOrder?: number | null;
  label?: string | null;
  logo?: string | null;
}

export interface InstallmentOptions {
  displayHints?: InstallmentDisplayHints | null;
  id?: string | null;
  installmentPlans?: Installments[] | null;
}

export interface InstallmentOptionsResponse {
  installmentOptions?: InstallmentOptions[] | null;
}

export interface Installments {
  amountOfMoneyPerInstallment?: AmountOfMoney | null;
  amountOfMoneyTotal?: AmountOfMoney | null;
  frequencyOfInstallments?: string | null;
  installmentPlanCode?: number | null;
  interestRate?: string | null;
  numberOfInstallments?: number | null;
}

export interface InvoicePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  additionalReference?: string | null;
}

export interface InvoicePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

export interface KeyValuePair {
  key?: string | null;
  value?: string | null;
}

export interface LabelTemplateElement {
  attributeKey?: string | null;
  mask?: string | null;
}

export interface LengthValidator {
  maxLength?: number | null;
  minLength?: number | null;
}

/**
 * @deprecated Use ShoppingCart.amountBreakdown instead
 */
export interface Level3SummaryData {
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type DISCOUNT instead
   */
  discountAmount?: number | null;
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type DUTY instead
   */
  dutyAmount?: number | null;
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type SHIPPING instead
   */
  shippingAmount?: number | null;
}

export interface LineItem {
  amountOfMoney?: AmountOfMoney | null;
  invoiceData?: LineItemInvoiceData | null;
  /**
   * @deprecated Use orderLineDetails instead
   */
  level3InterchangeInformation?: LineItemLevel3InterchangeInformation | null;
  orderLineDetails?: OrderLineDetails | null;
}

export interface LineItemInvoiceData {
  description?: string | null;
  merchantLinenumber?: string | null;
  merchantPagenumber?: string | null;
  nrOfItems?: string | null;
  pricePerItem?: number | null;
}

export interface LineItemLevel3InterchangeInformation {
  discountAmount?: number | null;
  lineAmountTotal?: number | null;
  productCode?: string | null;
  productPrice?: number | null;
  productType?: string | null;
  quantity?: number | null;
  taxAmount?: number | null;
  unit?: string | null;
}

/**
 * @deprecated No replacement
 */
export interface LoanRecipient {
  /**
   * @deprecated No replacement
   */
  accountNumber?: string | null;
  /**
   * @deprecated No replacement
   */
  dateOfBirth?: string | null;
  /**
   * @deprecated No replacement
   */
  partialPan?: string | null;
  /**
   * @deprecated No replacement
   */
  surname?: string | null;
  /**
   * @deprecated No replacement
   */
  zip?: string | null;
}

export interface LodgingCharge {
  chargeAmount?: number | null;
  chargeAmountCurrencyCode?: string | null;
  chargeType?: string | null;
}

export interface LodgingData {
  charges?: LodgingCharge[] | null;
  checkInDate?: string | null;
  checkOutDate?: string | null;
  folioNumber?: string | null;
  isConfirmedReservation?: boolean | null;
  isFacilityFireSafetyConform?: boolean | null;
  isNoShow?: boolean | null;
  isPreferenceSmokingRoom?: boolean | null;
  numberOfAdults?: number | null;
  numberOfNights?: number | null;
  numberOfRooms?: number | null;
  programCode?: string | null;
  propertyCustomerServicePhoneNumber?: string | null;
  propertyPhoneNumber?: string | null;
  renterName?: string | null;
  rooms?: LodgingRoom[] | null;
}

export interface LodgingRoom {
  dailyRoomRate?: string | null;
  dailyRoomRateCurrencyCode?: string | null;
  dailyRoomTaxAmount?: string | null;
  dailyRoomTaxAmountCurrencyCode?: string | null;
  numberOfNightsAtRoomRate?: number | null;
  roomLocation?: string | null;
  roomNumber?: string | null;
  typeOfBed?: string | null;
  typeOfRoom?: string | null;
}

export interface MandateAddress {
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface MandateApproval {
  mandateSignatureDate?: string | null;
  mandateSignaturePlace?: string | null;
  mandateSigned?: boolean | null;
}

export interface MandateContactDetails {
  emailAddress?: string | null;
}

export interface MandateCustomer {
  bankAccountIban?: BankAccountIban | null;
  companyName?: string | null;
  contactDetails?: MandateContactDetails | null;
  mandateAddress?: MandateAddress | null;
  personalInformation?: MandatePersonalInformation | null;
}

export interface MandateMerchantAction {
  actionType?: string | null;
  redirectData?: MandateRedirectData | null;
}

export interface MandateNonSepaDirectDebit {
  paymentProduct705SpecificData?: TokenNonSepaDirectDebitPaymentProduct705SpecificData | null;
  paymentProduct730SpecificData?: TokenNonSepaDirectDebitPaymentProduct730SpecificData | null;
}

export interface MandatePersonalInformation {
  name?: MandatePersonalName | null;
  title?: string | null;
}

export interface MandatePersonalName {
  firstName?: string | null;
  surname?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MandateRedirectData extends RedirectDataBase {}

export interface MandateResponse {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  recurrenceType?: string | null;
  status?: string | null;
  uniqueMandateReference?: string | null;
}

export interface MandateSepaDirectDebit extends MandateSepaDirectDebitWithMandateId {
  creditor?: Creditor | null;
}

export interface MandateSepaDirectDebitWithMandateId extends MandateSepaDirectDebitWithoutCreditor {
  mandateId?: string | null;
}

export interface MandateSepaDirectDebitWithoutCreditor {
  bankAccountIban?: BankAccountIban | null;
  customerContractIdentifier?: string | null;
  debtor?: Debtor | null;
  isRecurring?: boolean | null;
  mandateApproval?: MandateApproval | null;
  preNotification?: string | null;
}

export interface Merchant {
  configurationId?: string | null;
  contactWebsiteUrl?: string | null;
  seller?: Seller | null;
  websiteUrl?: string | null;
}

export interface MerchantAction {
  actionType?: string | null;
  formFields?: PaymentProductField[] | null;
  mobileThreeDSecureChallengeParameters?: MobileThreeDSecureChallengeParameters | null;
  redirectData?: RedirectData | null;
  renderingData?: string | null;
  showData?: KeyValuePair[] | null;
  thirdPartyData?: ThirdPartyData | null;
}

export interface MerchantRiskAssessment {
  websiteUrl?: string | null;
}

export interface MicrosoftFraudResults {
  clauseName?: string | null;
  deviceCountryCode?: string | null;
  deviceId?: string | null;
  fraudScore?: number | null;
  policyApplied?: string | null;
  reasonCodes?: string[] | null;
  trueIpAddress?: string | null;
  userDeviceType?: string | null;
}

export interface MobilePaymentData {
  dpan?: string | null;
  expiryDate?: string | null;
}

export interface MobilePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  authorizationMode?: string | null;
  customerReference?: string | null;
  decryptedPaymentData?: DecryptedPaymentData | null;
  encryptedPaymentData?: string | null;
  paymentProduct320SpecificInput?: MobilePaymentProduct320SpecificInput | null;
  requiresApproval?: boolean | null;
  skipFraudService?: boolean | null;
}

export interface MobilePaymentMethodSpecificInputHostedCheckout extends AbstractPaymentMethodSpecificInput {
  authorizationMode?: string | null;
  customerReference?: string | null;
  paymentProduct302SpecificInput?: MobilePaymentProduct302SpecificInputHostedCheckout | null;
  paymentProduct320SpecificInput?: MobilePaymentProduct320SpecificInputHostedCheckout | null;
  requiresApproval?: boolean | null;
  skipFraudService?: boolean | null;
}

export interface MobilePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  authorisationCode?: string | null;
  fraudResults?: CardFraudResults | null;
  network?: string | null;
  paymentData?: MobilePaymentData | null;
  threeDSecureResults?: ThreeDSecureResults | null;
}

export interface MobilePaymentProduct302SpecificInputHostedCheckout {
  businessName?: string | null;
}

export interface MobilePaymentProduct320SpecificInput {
  cardholderName?: string | null;
  threeDSecure?: GPayThreeDSecure | null;
}

export interface MobilePaymentProduct320SpecificInputHostedCheckout {
  merchantName?: string | null;
  merchantOrigin?: string | null;
  threeDSecure?: GPayThreeDSecure | null;
}

export interface MobilePaymentProductSession302SpecificInput {
  displayName?: string | null;
  domainName?: string | null;
  validationUrl?: string | null;
}

export interface MobilePaymentProductSession302SpecificOutput {
  sessionObject?: string | null;
}

export interface MobileThreeDSecureChallengeParameters {
  acsReferenceNumber?: string | null;
  acsSignedContent?: string | null;
  acsTransactionId?: string | null;
  threeDServerTransactionId?: string | null;
}

export interface NetworkTokenData {
  networkToken?: string | null;
  tokenExpiryDate?: string | null;
  tokenReferenceId?: string | null;
}

export interface NonSepaDirectDebitPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  dateCollect?: string | null;
  directDebitText?: string | null;
  isRecurring?: boolean | null;
  paymentProduct705SpecificInput?: NonSepaDirectDebitPaymentProduct705SpecificInput | null;
  paymentProduct730SpecificInput?: NonSepaDirectDebitPaymentProduct730SpecificInput | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

export interface NonSepaDirectDebitPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

export interface NonSepaDirectDebitPaymentProduct705SpecificInput {
  authorisationId?: string | null;
  bankAccountBban?: BankAccountBban | null;
  transactionType?: string | null;
}

export interface NonSepaDirectDebitPaymentProduct730SpecificInput {
  bankAccountBban?: BankAccountBban | null;
}

export interface Order {
  additionalInput?: AdditionalOrderInput | null;
  amountOfMoney?: AmountOfMoney | null;
  customer?: Customer | null;
  /**
   * @deprecated Use shoppingCart.items instead
   */
  items?: LineItem[] | null;
  references?: OrderReferences | null;
  /**
   * @deprecated Use Merchant.seller instead
   */
  seller?: Seller | null;
  shipping?: Shipping | null;
  shoppingCart?: ShoppingCart | null;
}

export interface OrderApprovePayment {
  additionalInput?: AdditionalOrderInputAirlineData | null;
  customer?: CustomerApprovePayment | null;
  references?: OrderReferencesApprovePayment | null;
}

export interface OrderInvoiceData {
  additionalData?: string | null;
  invoiceDate?: string | null;
  invoiceNumber?: string | null;
  textQualifiers?: string[] | null;
}

export interface OrderLineDetails {
  discountAmount?: number | null;
  googleProductCategoryId?: number | null;
  lineAmountTotal?: number | null;
  naicsCommodityCode?: string | null;
  productCategory?: string | null;
  productCode?: string | null;
  productImageUrl?: string | null;
  productName?: string | null;
  productPrice?: number | null;
  productSku?: string | null;
  productType?: string | null;
  productUrl?: string | null;
  quantity?: number | null;
  taxAmount?: number | null;
  unit?: string | null;
}

export interface OrderOutput {
  amountOfMoney?: AmountOfMoney | null;
  references?: PaymentReferences | null;
}

export interface OrderReferences {
  descriptor?: string | null;
  invoiceData?: OrderInvoiceData | null;
  merchantOrderId?: number | null;
  merchantReference?: string | null;
  providerId?: string | null;
  providerMerchantId?: string | null;
}

export interface OrderReferencesApprovePayment {
  merchantReference?: string | null;
}

export interface OrderRiskAssessment {
  additionalInput?: AdditionalOrderInputAirlineData | null;
  amountOfMoney?: AmountOfMoney | null;
  customer?: CustomerRiskAssessment | null;
  shipping?: ShippingRiskAssessment | null;
}

export interface OrderStatusOutput {
  errors?: APIError[] | null;
  isCancellable?: boolean | null;
  isRetriable?: boolean | null;
  providerRawOutput?: KeyValuePair[] | null;
  statusCategory?: string | null;
  statusCode?: number | null;
  statusCodeChangeDateTime?: string | null;
}

export interface OrderTypeInformation {
  fundingType?: string | null;
  paymentCode?: string | null;
  purchaseType?: string | null;
  transactionType?: string | null;
  usageType?: string | null;
}

export interface Payment extends AbstractOrderStatus {
  hostedCheckoutSpecificOutput?: HostedCheckoutSpecificOutput | null;
  paymentOutput?: PaymentOutput | null;
  status?: string | null;
  statusOutput?: PaymentStatusOutput | null;
}

export interface PaymentAccountOnFile {
  createDate?: string | null;
  numberOfCardOnFileCreationAttemptsLast24Hours?: number | null;
}

export interface PaymentApprovalResponse {
  cardPaymentMethodSpecificOutput?: ApprovePaymentCardPaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: ApprovePaymentMobilePaymentMethodSpecificOutput | null;
  payment?: Payment | null;
  /**
   * @deprecated Use cardPaymentMethodSpecificOutput instead
   */
  paymentMethodSpecificOutput?: ApprovePaymentCardPaymentMethodSpecificOutput | null;
}

export interface PaymentContext {
  amountOfMoney?: AmountOfMoney | null;
  countryCode?: string | null;
  isInstallments?: boolean | null;
  isRecurring?: boolean | null;
}

export interface PaymentCreationOutput extends PaymentCreationReferences {
  isCheckedRememberMe?: boolean | null;
  isNewToken?: boolean | null;
  token?: string | null;
  tokenizationSucceeded?: boolean | null;
}

export interface PaymentCreationReferences {
  additionalReference?: string | null;
  externalReference?: string | null;
}

export interface PaymentErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  paymentResult?: CreatePaymentResult | null;
}

export interface PaymentOutput extends OrderOutput {
  amountPaid?: number | null;
  amountReversed?: number | null;
  bankTransferPaymentMethodSpecificOutput?: BankTransferPaymentMethodSpecificOutput | null;
  cardPaymentMethodSpecificOutput?: CardPaymentMethodSpecificOutput | null;
  cashPaymentMethodSpecificOutput?: CashPaymentMethodSpecificOutput | null;
  directDebitPaymentMethodSpecificOutput?: NonSepaDirectDebitPaymentMethodSpecificOutput | null;
  eInvoicePaymentMethodSpecificOutput?: EInvoicePaymentMethodSpecificOutput | null;
  invoicePaymentMethodSpecificOutput?: InvoicePaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: MobilePaymentMethodSpecificOutput | null;
  paymentMethod?: string | null;
  redirectPaymentMethodSpecificOutput?: RedirectPaymentMethodSpecificOutput | null;
  reversalReason?: string | null;
  sepaDirectDebitPaymentMethodSpecificOutput?: SepaDirectDebitPaymentMethodSpecificOutput | null;
}

export interface PaymentProduct {
  accountsOnFile?: AccountOnFile[] | null;
  acquirerCountry?: string | null;
  allowsInstallments?: boolean | null;
  allowsRecurring?: boolean | null;
  allowsTokenization?: boolean | null;
  authenticationIndicator?: AuthenticationIndicator | null;
  autoTokenized?: boolean | null;
  canBeIframed?: boolean | null;
  deviceFingerprintEnabled?: boolean | null;
  displayHints?: PaymentProductDisplayHints | null;
  fields?: PaymentProductField[] | null;
  fieldsWarning?: string | null;
  id?: number | null;
  isAuthenticationSupported?: boolean | null;
  isJavaScriptRequired?: boolean | null;
  maxAmount?: number | null;
  minAmount?: number | null;
  mobileIntegrationLevel?: string | null;
  paymentMethod?: string | null;
  paymentProduct302SpecificData?: PaymentProduct302SpecificData | null;
  paymentProduct320SpecificData?: PaymentProduct320SpecificData | null;
  paymentProduct863SpecificData?: PaymentProduct863SpecificData | null;
  paymentProductGroup?: string | null;
  supportsMandates?: boolean | null;
  usesRedirectionTo3rdParty?: boolean | null;
}

export interface PaymentProduct302SpecificData {
  networks?: string[] | null;
}

export interface PaymentProduct3201SpecificOutput {
  card?: CardEssentials | null;
}

export interface PaymentProduct320SpecificData {
  gateway?: string | null;
  networks?: string[] | null;
}

export interface PaymentProduct771SpecificOutput {
  mandateReference?: string | null;
}

export interface PaymentProduct806SpecificOutput {
  billingAddress?: Address | null;
  customerAccount?: TrustlyBankAccount | null;
}

export interface PaymentProduct836SpecificOutput {
  securityIndicator?: string | null;
}

export interface PaymentProduct840CustomerAccount {
  accountId?: string | null;
  billingAgreementId?: string | null;
  companyName?: string | null;
  contactPhone?: string | null;
  countryCode?: string | null;
  customerAccountStatus?: string | null;
  customerAddressStatus?: string | null;
  firstName?: string | null;
  payerId?: string | null;
  surname?: string | null;
}

export interface PaymentProduct840SpecificOutput {
  billingAddress?: Address | null;
  customerAccount?: PaymentProduct840CustomerAccount | null;
  customerAddress?: Address | null;
  protectionEligibility?: ProtectionEligibility | null;
}

export interface PaymentProduct863SpecificData {
  integrationTypes?: string[] | null;
}

export interface PaymentProduct863ThirdPartyData {
  appId?: string | null;
  nonceStr?: string | null;
  packageSign?: string | null;
  paySign?: string | null;
  prepayId?: string | null;
  signType?: string | null;
  timeStamp?: string | null;
}

export interface PaymentProductDisplayHints {
  displayOrder?: number | null;
  label?: string | null;
  logo?: string | null;
}

export interface PaymentProductField {
  dataRestrictions?: PaymentProductFieldDataRestrictions | null;
  displayHints?: PaymentProductFieldDisplayHints | null;
  id?: string | null;
  type?: string | null;
  usedForLookup?: boolean | null;
}

export interface PaymentProductFieldDataRestrictions {
  isRequired?: boolean | null;
  validators?: PaymentProductFieldValidators | null;
}

export interface PaymentProductFieldDisplayElement {
  id?: string | null;
  label?: string | null;
  type?: string | null;
  value?: string | null;
}

export interface PaymentProductFieldDisplayHints {
  alwaysShow?: boolean | null;
  displayOrder?: number | null;
  formElement?: PaymentProductFieldFormElement | null;
  label?: string | null;
  link?: string | null;
  mask?: string | null;
  obfuscate?: boolean | null;
  placeholderLabel?: string | null;
  preferredInputType?: string | null;
  tooltip?: PaymentProductFieldTooltip | null;
}

export interface PaymentProductFieldFormElement {
  type?: string | null;
  valueMapping?: ValueMappingElement[] | null;
}

export interface PaymentProductFieldTooltip {
  image?: string | null;
  label?: string | null;
}

export interface PaymentProductFieldValidators {
  boletoBancarioRequiredness?: BoletoBancarioRequirednessValidator | null;
  emailAddress?: EmptyValidator | null;
  expirationDate?: EmptyValidator | null;
  fixedList?: FixedListValidator | null;
  iban?: EmptyValidator | null;
  length?: LengthValidator | null;
  luhn?: EmptyValidator | null;
  range?: RangeValidator | null;
  regularExpression?: RegularExpressionValidator | null;
  residentIdNumber?: EmptyValidator | null;
  termsAndConditions?: EmptyValidator | null;
}

export interface PaymentProductFilter {
  groups?: string[] | null;
  products?: number[] | null;
}

export interface PaymentProductFiltersClientSession {
  exclude?: PaymentProductFilter | null;
  restrictTo?: PaymentProductFilter | null;
}

export interface PaymentProductFiltersHostedCheckout {
  exclude?: PaymentProductFilter | null;
  restrictTo?: PaymentProductFilter | null;
  tokensOnly?: boolean | null;
}

export interface PaymentProductGroup {
  accountsOnFile?: AccountOnFile[] | null;
  allowsInstallments?: boolean | null;
  deviceFingerprintEnabled?: boolean | null;
  displayHints?: PaymentProductDisplayHints | null;
  fields?: PaymentProductField[] | null;
  id?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentProductGroupResponse extends PaymentProductGroup {}

export interface PaymentProductGroups {
  paymentProductGroups?: PaymentProductGroup[] | null;
}

export interface PaymentProductNetworksResponse {
  networks?: string[] | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentProductResponse extends PaymentProduct {}

export interface PaymentProducts {
  paymentProducts?: PaymentProduct[] | null;
}

export interface PaymentReferences {
  merchantCaptureReference?: string | null;
  merchantOrderId?: number | null;
  merchantReference?: string | null;
  paymentReference?: string | null;
  providerId?: string | null;
  providerMerchantId?: string | null;
  providerReference?: string | null;
  referenceOrigPayment?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentResponse extends Payment {}

export interface PaymentStatusOutput extends OrderStatusOutput {
  isAuthorized?: boolean | null;
  isRefundable?: boolean | null;
  threeDSecureStatus?: string | null;
}

export interface PayoutCustomer {
  address?: Address | null;
  companyInformation?: CompanyInformation | null;
  contactDetails?: ContactDetailsBase | null;
  merchantCustomerId?: string | null;
  name?: PersonalName | null;
}

export interface PayoutDetails {
  amountOfMoney?: AmountOfMoney | null;
  customer?: PayoutCustomer | null;
  references?: PayoutReferences | null;
}

export interface PayoutErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  payoutResult?: PayoutResult | null;
}

export interface PayoutMerchant {
  configurationId?: string | null;
}

export interface PayoutRecipient {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
}

export interface PayoutReferences {
  invoiceNumber?: string | null;
  merchantOrderId?: number | null;
  merchantReference?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PayoutResponse extends PayoutResult {}

export interface PayoutResult extends AbstractOrderStatus {
  payoutOutput?: OrderOutput | null;
  status?: string | null;
  statusOutput?: OrderStatusOutput | null;
}

export interface PersonalIdentification {
  idIssuingCountryCode?: string | null;
  idType?: string | null;
  idValue?: string | null;
}

export interface PersonalInformation {
  dateOfBirth?: string | null;
  gender?: string | null;
  identification?: PersonalIdentification | null;
  name?: PersonalName | null;
}

export interface PersonalInformationRiskAssessment {
  name?: PersonalNameRiskAssessment | null;
}

export interface PersonalInformationToken {
  name?: PersonalNameToken | null;
}

export interface PersonalName extends PersonalNameBase {
  title?: string | null;
}

export interface PersonalNameBase {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersonalNameRiskAssessment extends PersonalNameBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersonalNameToken extends PersonalNameBase {}

export interface ProtectionEligibility {
  eligibility?: string | null;
  type?: string | null;
}

export interface RangeValidator {
  maxValue?: number | null;
  minValue?: number | null;
}

export interface RecurringPaymentsData {
  recurringInterval?: Frequency | null;
  trialInformation?: TrialInformation | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectData extends RedirectDataBase {}

export interface RedirectDataBase {
  RETURNMAC?: string | null;
  redirectURL?: string | null;
}

export interface RedirectPaymentMethodSpecificInput extends AbstractRedirectPaymentMethodSpecificInput {
  isRecurring?: boolean | null;
  paymentProduct4101SpecificInput?: RedirectPaymentProduct4101SpecificInput | null;
  paymentProduct809SpecificInput?: RedirectPaymentProduct809SpecificInput | null;
  paymentProduct838SpecificInput?: RedirectPaymentProduct838SpecificInput | null;
  paymentProduct840SpecificInput?: RedirectPaymentProduct840SpecificInput | null;
  paymentProduct861SpecificInput?: RedirectPaymentProduct861SpecificInput | null;
  paymentProduct863SpecificInput?: RedirectPaymentProduct863SpecificInput | null;
  paymentProduct869SpecificInput?: RedirectPaymentProduct869SpecificInput | null;
  paymentProduct882SpecificInput?: RedirectPaymentProduct882SpecificInput | null;
  redirectionData?: RedirectionData | null;
  /**
   * @deprecated Use redirectionData.returnUrl instead
   */
  returnUrl?: string | null;
}

export interface RedirectPaymentMethodSpecificInputBase extends AbstractRedirectPaymentMethodSpecificInput {
  paymentProduct4101SpecificInput?: RedirectPaymentProduct4101SpecificInputBase | null;
  paymentProduct838SpecificInput?: RedirectPaymentProduct838SpecificInputBase | null;
  paymentProduct840SpecificInput?: RedirectPaymentProduct840SpecificInputBase | null;
}

export interface RedirectPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  bic?: string | null;
  fraudResults?: FraudResults | null;
  paymentProduct3201SpecificOutput?: PaymentProduct3201SpecificOutput | null;
  paymentProduct806SpecificOutput?: PaymentProduct806SpecificOutput | null;
  paymentProduct836SpecificOutput?: PaymentProduct836SpecificOutput | null;
  paymentProduct840SpecificOutput?: PaymentProduct840SpecificOutput | null;
  token?: string | null;
}

export interface RedirectPaymentProduct4101SpecificInput {
  displayName?: string | null;
  integrationType?: string | null;
  virtualPaymentAddress?: string | null;
}

export interface RedirectPaymentProduct4101SpecificInputBase extends AbstractRedirectPaymentProduct4101SpecificInput {
  displayName?: string | null;
}

export interface RedirectPaymentProduct809SpecificInput {
  /**
   * @deprecated Use RedirectPaymentMethodSpecificInput.expirationPeriod instead
   */
  expirationPeriod?: string | null;
  issuerId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectPaymentProduct838SpecificInput extends AbstractRedirectPaymentProduct838SpecificInput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectPaymentProduct838SpecificInputBase extends AbstractRedirectPaymentProduct838SpecificInput {}

export interface RedirectPaymentProduct840SpecificInput extends AbstractRedirectPaymentProduct840SpecificInput {
  /**
   * @deprecated Use Order.references.descriptor instead
   */
  custom?: string | null;
  isShortcut?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectPaymentProduct840SpecificInputBase extends AbstractRedirectPaymentProduct840SpecificInput {}

export interface RedirectPaymentProduct861SpecificInput {
  mobileDevice?: boolean | null;
}

export interface RedirectPaymentProduct863SpecificInput {
  integrationType?: string | null;
  openId?: string | null;
}

export interface RedirectPaymentProduct869SpecificInput {
  issuerId?: string | null;
  residentIdName?: string | null;
  residentIdNumber?: string | null;
}

export interface RedirectPaymentProduct882SpecificInput {
  issuerId?: string | null;
}

export interface RedirectionData {
  returnUrl?: string | null;
  variant?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundBankMethodSpecificOutput extends RefundMethodSpecificOutput {}

export interface RefundCardMethodSpecificOutput extends RefundMethodSpecificOutput {
  authorisationCode?: string | null;
  card?: CardEssentials | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundCashMethodSpecificOutput extends RefundMethodSpecificOutput {}

export interface RefundCustomer {
  address?: AddressPersonal | null;
  companyInformation?: CompanyInformation | null;
  contactDetails?: ContactDetailsBase | null;
  fiscalNumber?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundEInvoiceMethodSpecificOutput extends RefundMethodSpecificOutput {}

export interface RefundEWalletMethodSpecificOutput extends RefundMethodSpecificOutput {
  paymentProduct840SpecificOutput?: RefundPaymentProduct840SpecificOutput | null;
}

export interface RefundErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  refundResult?: RefundResult | null;
}

export interface RefundMethodSpecificOutput {
  refundProductId?: number | null;
  totalAmountPaid?: number | null;
  totalAmountRefunded?: number | null;
}

export interface RefundMobileMethodSpecificOutput extends RefundMethodSpecificOutput {
  network?: string | null;
}

export interface RefundOutput extends OrderOutput {
  amountPaid?: number | null;
  bankRefundMethodSpecificOutput?: RefundBankMethodSpecificOutput | null;
  cardRefundMethodSpecificOutput?: RefundCardMethodSpecificOutput | null;
  cashRefundMethodSpecificOutput?: RefundCashMethodSpecificOutput | null;
  eInvoiceRefundMethodSpecificOutput?: RefundEInvoiceMethodSpecificOutput | null;
  eWalletRefundMethodSpecificOutput?: RefundEWalletMethodSpecificOutput | null;
  mobileRefundMethodSpecificOutput?: RefundMobileMethodSpecificOutput | null;
  paymentMethod?: string | null;
}

export interface RefundPaymentProduct840CustomerAccount {
  customerAccountStatus?: string | null;
  customerAddressStatus?: string | null;
  payerId?: string | null;
}

export interface RefundPaymentProduct840SpecificOutput {
  customerAccount?: RefundPaymentProduct840CustomerAccount | null;
}

export interface RefundReferences {
  merchantReference?: string | null;
}

export interface RefundRequest {
  amountOfMoney?: AmountOfMoney | null;
  bankRefundMethodSpecificInput?: BankRefundMethodSpecificInput | null;
  customer?: RefundCustomer | null;
  refundDate?: string | null;
  refundReferences?: RefundReferences | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundResponse extends RefundResult {}

export interface RefundResult extends AbstractOrderStatus {
  refundOutput?: RefundOutput | null;
  status?: string | null;
  statusOutput?: OrderStatusOutput | null;
}

export interface RefundsResponse {
  refunds?: RefundResult[] | null;
}

export interface RegularExpressionValidator {
  regularExpression?: string | null;
}

export interface ResultDoRiskAssessment {
  category?: string | null;
  result?: string | null;
  retaildecisionsCCFraudCheckOutput?: RetailDecisionsCCFraudCheckOutput | null;
  validationBankAccountOutput?: ValidationBankAccountOutput | null;
}

export interface RetailDecisionsCCFraudCheckOutput {
  fraudCode?: string | null;
  fraudNeural?: string | null;
  fraudRCF?: string | null;
}

export interface RiskAssessment {
  fraudFields?: FraudFields | null;
  merchant?: MerchantRiskAssessment | null;
  order?: OrderRiskAssessment | null;
  paymentProductId?: number | null;
}

export interface RiskAssessmentBankAccount extends RiskAssessment {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
}

export interface RiskAssessmentCard extends RiskAssessment {
  card?: Card | null;
}

export interface RiskAssessmentResponse {
  results?: ResultDoRiskAssessment[] | null;
}

export interface SchemeTokenData {
  cardholderName?: string | null;
  cryptogram?: string | null;
  eci?: string | null;
  networkToken?: string | null;
  tokenExpiryDate?: string | null;
}

export interface SdkDataInput {
  deviceRenderOptions?: DeviceRenderOptions | null;
  sdkAppId?: string | null;
  sdkEncryptedData?: string | null;
  sdkEphemeralPublicKey?: string | null;
  sdkMaxTimeout?: string | null;
  sdkReferenceNumber?: string | null;
  sdkTransactionId?: string | null;
}

export interface SdkDataOutput {
  sdkTransactionId?: string | null;
}

export interface Seller {
  address?: Address | null;
  channelCode?: string | null;
  description?: string | null;
  externalReferenceId?: string | null;
  geocode?: string | null;
  id?: string | null;
  invoiceNumber?: string | null;
  isForeignRetailer?: boolean | null;
  mcc?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  type?: string | null;
}

export interface SepaDirectDebitPaymentMethodSpecificInput extends AbstractSepaDirectDebitPaymentMethodSpecificInput {
  dateCollect?: string | null;
  directDebitText?: string | null;
  isRecurring?: boolean | null;
  paymentProduct771SpecificInput?: SepaDirectDebitPaymentProduct771SpecificInput | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

export interface SepaDirectDebitPaymentMethodSpecificInputBase extends AbstractSepaDirectDebitPaymentMethodSpecificInput {
  paymentProduct771SpecificInput?: SepaDirectDebitPaymentProduct771SpecificInputBase | null;
}

export interface SepaDirectDebitPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
  paymentProduct771SpecificOutput?: PaymentProduct771SpecificOutput | null;
  token?: string | null;
}

export interface SepaDirectDebitPaymentProduct771SpecificInput extends AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  existingUniqueMandateReference?: string | null;
  mandate?: CreateMandateWithReturnUrl | null;
}

export interface SepaDirectDebitPaymentProduct771SpecificInputBase extends AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  existingUniqueMandateReference?: string | null;
  mandate?: CreateMandateBase | null;
}

export interface SessionRequest {
  paymentProductFilters?: PaymentProductFiltersClientSession | null;
  tokens?: string[] | null;
}

export interface SessionResponse {
  assetUrl?: string | null;
  clientApiUrl?: string | null;
  clientSessionId?: string | null;
  customerId?: string | null;
  invalidTokens?: string[] | null;
  region?: string | null;
}

export interface Shipping {
  address?: AddressPersonal | null;
  addressIndicator?: string | null;
  carrier?: string | null;
  comments?: string | null;
  emailAddress?: string | null;
  firstUsageDate?: string | null;
  instructions?: string | null;
  isFirstUsage?: boolean | null;
  shippedFromZip?: string | null;
  trackingNumber?: string | null;
  type?: string | null;
}

export interface ShippingRiskAssessment {
  address?: AddressPersonal | null;
  comments?: string | null;
  trackingNumber?: string | null;
}

export interface ShoppingCart {
  amountBreakdown?: AmountBreakdown[] | null;
  giftCardPurchase?: GiftCardPurchase | null;
  isPreOrder?: boolean | null;
  items?: LineItem[] | null;
  preOrderItemAvailabilityDate?: string | null;
  reOrderIndicator?: boolean | null;
}

export interface Swift {
  bic?: string | null;
  category?: string | null;
  chipsUID?: string | null;
  extraInfo?: string | null;
  poBoxCountry?: string | null;
  poBoxLocation?: string | null;
  poBoxNumber?: string | null;
  poBoxZip?: string | null;
  routingBic?: string | null;
  services?: string | null;
}

export interface TestConnection {
  result?: string | null;
}

export interface ThirdPartyData {
  paymentProduct863?: PaymentProduct863ThirdPartyData | null;
}

export interface ThirdPartyStatusResponse {
  thirdPartyStatus?: string | null;
}

export interface ThreeDSecure extends AbstractThreeDSecure {
  externalCardholderAuthenticationData?: ExternalCardholderAuthenticationData | null;
  redirectionData?: RedirectionData | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThreeDSecureBase extends AbstractThreeDSecure {}

export interface ThreeDSecureData {
  acsTransactionId?: string | null;
  method?: string | null;
  utcTimestamp?: string | null;
}

export interface ThreeDSecureResults {
  acsTransactionId?: string | null;
  appliedExemption?: string | null;
  authenticationAmount?: AmountOfMoney | null;
  cavv?: string | null;
  directoryServerTransactionId?: string | null;
  eci?: string | null;
  exemptionOutput?: ExemptionOutput | null;
  schemeRiskScore?: number | null;
  sdkData?: SdkDataOutput | null;
  threeDSecureData?: ThreeDSecureData | null;
  threeDSecureVersion?: string | null;
  threeDServerTransactionId?: string | null;
  xid?: string | null;
}

export interface TokenCard extends AbstractToken {
  customer?: CustomerToken | null;
  data?: TokenCardData | null;
}

export interface TokenCardData {
  cardWithoutCvv?: CardWithoutCvv | null;
  firstTransactionDate?: string | null;
  providerReference?: string | null;
}

export interface TokenEWallet extends AbstractToken {
  customer?: CustomerToken | null;
  data?: TokenEWalletData | null;
}

export interface TokenEWalletData {
  billingAgreementId?: string | null;
}

export interface TokenNonSepaDirectDebit extends AbstractToken {
  customer?: CustomerToken | null;
  mandate?: MandateNonSepaDirectDebit | null;
}

export interface TokenNonSepaDirectDebitPaymentProduct705SpecificData {
  authorisationId?: string | null;
  bankAccountBban?: BankAccountBban | null;
}

export interface TokenNonSepaDirectDebitPaymentProduct730SpecificData {
  bankAccountBban?: BankAccountBban | null;
}

export interface TokenResponse {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  id?: string | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  originalPaymentId?: string | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebit | null;
}

export interface TokenSepaDirectDebit extends AbstractToken {
  customer?: CustomerTokenWithContactDetails | null;
  mandate?: MandateSepaDirectDebit | null;
}

export interface TokenSepaDirectDebitWithoutCreditor extends AbstractToken {
  customer?: CustomerTokenWithContactDetails | null;
  mandate?: MandateSepaDirectDebitWithoutCreditor | null;
}

export interface TokenizePaymentRequest {
  alias?: string | null;
}

export interface TrialInformation {
  amountOfMoneyAfterTrial?: AmountOfMoney | null;
  endDate?: string | null;
  isRecurring?: boolean | null;
  trialPeriod?: TrialPeriod | null;
  trialPeriodRecurring?: Frequency | null;
}

export interface TrialPeriod {
  duration?: number | null;
  interval?: string | null;
}

export interface TrustlyBankAccount {
  accountLastDigits?: string | null;
  bankName?: string | null;
  clearinghouse?: string | null;
  personIdentificationNumber?: string | null;
}

export interface UpdateTokenRequest {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebitWithoutCreditor | null;
}

export interface UploadDisputeFileResponse {
  disputeId?: string | null;
  fileId?: string | null;
}

export interface ValidationBankAccountCheck {
  code?: string | null;
  description?: string | null;
  result?: string | null;
}

export interface ValidationBankAccountOutput {
  checks?: ValidationBankAccountCheck[] | null;
  newBankName?: string | null;
  reformattedAccountNumber?: string | null;
  reformattedBankCode?: string | null;
  reformattedBranchCode?: string | null;
}

export interface ValueMappingElement {
  displayElements?: PaymentProductFieldDisplayElement[] | null;
  /**
   * @deprecated Use displayElements instead with ID 'displayName'
   */
  displayName?: string | null;
  value?: string | null;
}

export interface WebhooksEvent {
  apiVersion?: string | null;
  created?: string | null;
  dispute?: DisputeResponse | null;
  id?: string | null;
  merchantId?: string | null;
  payment?: PaymentResponse | null;
  payout?: PayoutResponse | null;
  refund?: RefundResponse | null;
  token?: TokenResponse | null;
  type?: string | null;
}
