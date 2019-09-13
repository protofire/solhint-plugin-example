class VisibilityRule {
  constructor(reporter, config) {
    this.ruleId = 'visibility'

    this.reporter = reporter
    this.config = config
  }

  enterContractDefinition() {
    this.publicStuff = 0
  }

  exitContractDefinition(ctx) {
    if (this.publicStuff === 0) {
      this.reporter.error(ctx, this.ruleId, 'There must be at least one visible variable or function')
    }
  }

  enterStateVariableDeclaration(ctx) {
    // state variables are internal by default and they can't be external, so
    // the only case in which they are visible is when they are explicitly public
    if (ctx.PublicKeyword(0)) {
      this.publicStuff++;
    }
  }

  enterFunctionDefinition(ctx) {
    // function definitions are public by default, so they are not visible if
    // they are either explicitly private or explicitly internal
    const isPrivate = ctx.modifierList().PrivateKeyword(0)
    const isInternal = ctx.modifierList().InternalKeyword(0)
    if (!isPrivate && !isInternal) {
      this.publicStuff++;
    }
  }
}

module.exports = [VisibilityRule]
