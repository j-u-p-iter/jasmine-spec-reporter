export class DisplayProcessor {
    constructor(protected options?: any) {}

    displayJasmineStarted(info: any, log: String): String {
        return log;
    }

    displaySuite(suite: any, log: String): String {
        return log;
    }

    displaySpecStarted(spec: any, log: String): String {
        return log;
    }

    displaySuccessfulSpec(spec: any, log: String): String {
        return log;
    }

    displayFailedSpec(spec: any, log: String): String {
        return log;
    }

    displayPendingSpec(spec: any, log: String): String {
        return log;
    }
}
