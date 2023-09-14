import {
  ClassificationPolicy,
  ExceptionPolicy,
  DistributionPolicy,
  JobQueue,
  RouterWorker,
  RouterJob,
  StaticQueueSelector,
  ConditionalQueueSelector,
  PassThroughQueueSelector,
  QueueSelector,
  RouterRuleUnion
} from "../../../src";

const exceptionPolicyId = "test-e-policy";
const classificationPolicyId = "test-c-policy";
const distributionPolicyId = "test-d-policy";
const channelId = "test-channel";
const queueId = "test-queue";
const jobId = "test-job";
const workerId = "test-worker";

const product = "O365";
const region = "NA";
const english = "EN";
const french = "FR";


const queueIdSelector: QueueSelector = {
  key: "Id",
  labelOperator: "equal",
  value: { default: queueId }
};

const englishSelector: QueueSelector = {
  key: "Language",
  labelOperator: "equal",
  value: { default: english }
};

const frenchSelector: QueueSelector = {
  key: "Language",
  labelOperator: "equal",
  value: { default: french }
};

export const staticQueueIdSelector: StaticQueueSelector = {
  kind: "static",
  labelSelector: queueIdSelector
};

export const passThroughSelectorRegion: PassThroughQueueSelector = {
  kind: "pass-through",
  key: "Region",
  labelOperator: "equal"
};

export const passThroughSelectorLanguage: PassThroughQueueSelector = {
  kind: "pass-through",
  key: "Language",
  labelOperator: "equal"
};

export const passThroughSelectorProduct: PassThroughQueueSelector = {
  kind: "pass-through",
  key: "Product",
  labelOperator: "equal"
};

const isO365: RouterRuleUnion = {
  kind: "expression-rule",
  value: { default: `If(job.Product = "${product}", true, false)'` }
};

const isEnglish: RouterRuleUnion = {
  kind: "expression-rule",
  value: { default: `If(job.Language = "${english}", true, false)'` }
};

const isFrench: RouterRuleUnion = {
  kind: "expression-rule",
  value: { default: `If(job.Language = "${french}", true, false)'` }
};

const isTrue: RouterRuleUnion = {
  kind: "static-rule",
  value: { default: true }
};

export const conditionalQueueSelector: ConditionalQueueSelector = {
  kind: "conditional",
  condition: isTrue,
  labelSelectors: []
};

export const conditionalProductSelector: ConditionalQueueSelector = {
  kind: "conditional",
  condition: isO365,
  labelSelectors: [queueIdSelector]
};

export const conditionalEnglishSelector: ConditionalQueueSelector = {
  kind: "conditional",
  condition: isEnglish,
  labelSelectors: [englishSelector]
}

export const conditionalFrenchSelector: ConditionalQueueSelector = {
  kind: "conditional",
  condition: isFrench,
  labelSelectors: [frenchSelector]
}


export const exceptionPolicyRequest: ExceptionPolicy = {
  id: exceptionPolicyId,
  name: exceptionPolicyId,
  exceptionRules: {
    MaxWaitTimeExceeded: {
      actions: {
        MoveJobToEscalatedQueue: {
          kind: "reclassify",
          classificationPolicyId: classificationPolicyId,
          labelsToUpsert: {
            escalated: true
          }
        }
      },
      trigger: {
        kind: "wait-time",
        thresholdSeconds: 10
      }
    }
  }
};

export const classificationPolicyConditional: ClassificationPolicy = {
  id: `${classificationPolicyId}-conditional`,
  name: `${classificationPolicyId}-conditional`,
  fallbackQueueId: queueId,
  queueSelectors: [conditionalProductSelector]
};

export const classificationPolicyPassthrough: ClassificationPolicy = {
  id: `${classificationPolicyId}-passthrough`,
  name: `${classificationPolicyId}-passthrough`,
  fallbackQueueId: queueId,
  queueSelectors: [passThroughSelectorRegion, passThroughSelectorProduct,]
};

export const classificationPolicyCombined: ClassificationPolicy = {
  id: `${classificationPolicyId}-combined`,
  name: `${classificationPolicyId}-combined`,
  fallbackQueueId: queueId,
  queueSelectors: [passThroughSelectorLanguage, passThroughSelectorProduct, conditionalEnglishSelector, conditionalFrenchSelector]
};

export const classificationPolicyRequest: ClassificationPolicy = {
  id: classificationPolicyId,
  name: classificationPolicyId
};

export const staticSelector: StaticQueueSelector = {
  kind: "static",
  labelSelector: { key: "value", labelOperator: "equal", value: { default: true } }
};

export const distributionPolicyRequest: DistributionPolicy = {
  id: distributionPolicyId,
  name: distributionPolicyId,
  offerTtlSeconds: 600,
  mode: {
    kind: "longest-idle",
    minConcurrentOffers: 1,
    maxConcurrentOffers: 5,
    bypassSelectors: false
  }
};

export const queueRequest: JobQueue = {
  id: queueId,
  name: queueId,
  exceptionPolicyId: exceptionPolicyId,
  distributionPolicyId: distributionPolicyId,
  labels: {}
};

export const englishQueue: JobQueue = {
  id: `${queueId}-english`,
  name: `${queueId}-english`,
  distributionPolicyId: distributionPolicyId,
  labels: {Region:region, Product:product, Language:english }
}

export const frenchQueue: JobQueue = {
  id: `${queueId}-french`,
  name: `${queueId}-french`,
  distributionPolicyId: distributionPolicyId,
  labels: {Region:region, Product:product, Language:french }
}

export const workerRequest: RouterWorker = {
  id: workerId,
  state: "active",
  loadRatio: 1,
  totalCapacity: 1,
  availableForOffers: true,
  queueAssignments: {
    queueId: { QueueId: queueId }
  },
  channelConfigurations: {
    channelId: {
      capacityCostPerJob: 1
    }
  },
  labels: {}
};

export const jobRequest: RouterJob = {
  id: jobId,
  channelId: channelId,
  priority: 1,
  classificationPolicyId: classificationPolicyId,
  labels: {}
};

export const conditionalScenarioJob: RouterJob = {
  id: `${jobId}-conditional`,
  channelId: channelId,
  priority: 1,
  classificationPolicyId: classificationPolicyConditional.id,
  labels: [{ Product: product}]
};

export const passthroughScenarioJob: RouterJob = {
  id: `${jobId}-passthrough`,
  channelId: channelId,
  priority: 1,
  classificationPolicyId: classificationPolicyPassthrough.id,
  labels: [{ Region: region}, {Language: english }]
};

export const englishJob: RouterJob = {
  id: `${jobId}-english`,
  channelId: channelId,
  priority: 1,
  classificationPolicyId: classificationPolicyCombined.id,
  labels: [{ Product: product}, {Region: region}, {Language: english }]
};

export const frenchJob: RouterJob = {
  id: `${jobId}-french`,
  channelId: channelId,
  priority: 1,
  classificationPolicyId: classificationPolicyCombined.id,
  labels: [{ Product: product}, {Region: region}, {Language: "FR" }]
};
