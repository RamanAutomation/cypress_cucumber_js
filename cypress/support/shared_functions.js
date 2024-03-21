export class sharedFunctions {

  static loadXPathValues() {
    cy.fixture("XPath.json").then((data) => {
      this.xPathVals = data;
    });
  }
  static loadIdvalues() {
    cy.fixture("IdMapping.json").then((data) => {
      this.idVals = data
    })
  }
  static getXpathValue(Key) {
    return this.xPathVals[Key]
  }
  static getIdValue(Key) {
    return this.idVals[Key]
  }
}
export default sharedFunctions;