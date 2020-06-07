import { RequestRetryLog } from '@pnpm/core-loggers'
import { oneLine } from 'common-tags'
import most = require('most')
import prettyMilliseconds = require('pretty-ms')
import formatWarn from './utils/formatWarn'

export default (
  requestRetry$: most.Stream<RequestRetryLog>
) => {
  return requestRetry$
    .map((log) => {
      const retriesLeft = log.maxRetries - log.attempt + 1
      const errorCode = log.error['httpStatusCode'] || log.error['status'] || log.error['errno'] || log.error['code']
      const msg = oneLine`${log.method} ${log.url} error (${errorCode}).
        Will retry in ${prettyMilliseconds(log.timeout, { verbose: true })}.
        ${retriesLeft} retries left.`
      return most.of({ msg: formatWarn(msg) })
    })
}
