class VisibilityRule {
  constructor(reporter, config) {
    this.ruleId = 'visibility'

    this.reporter = reporter
    this.config = config
  }

  enterContractDefinition() {
    // initial variables definition and setup
  }

  exitContractDefinition(ctx) {
    // final variables check and reporting
    // if (...) {
    //   this.reporter.error(ctx, this.ruleId, 'There must be at least one visible variable or function')
    // }
  }

  enterStateVariableDeclaration(ctx) {
    // state variables are internal by default and they can't be external, so
    // the only case in which they are visible is when they are explicitly public
  }

  enterFunctionDefinition(ctx) {
    // function definitions are public by default, so they are not visible if
    // they are either explicitly private or explicitly internal
    }
  }
}

module.exports = [VisibilityRule]
