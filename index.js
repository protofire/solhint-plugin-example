class VisibilityRule {
  constructor(reporter, config) {
    this.ruleId = 'visibility'

    this.reporter = reporter
    this.config = config
  }
}

module.exports = [VisibilityRule]
