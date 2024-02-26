describe("Test search functionality", () => {
  it("passes", () => {
    // set view port
    cy.viewport(1800, 1200);
    // website to visit
    cy.visit("https://www.telus.com");
    // click on the search button
    cy.get("#search-button").click();
    // type internet in the search input
    cy.get('[data-test="search-input"]').type("internet").wait(500);
    // assert that the 3rd search result contains the word 'internet'
    // cy.get('.sc-lizKOf > :nth-child(3) > .sc-ggpjZQ')
    //   .should('contain', 'internet')
    //   .and('match', /internet/)
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include("internet");
      });
    // click on the thrird search result
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ").click();

    // check the page heading has text search result
    cy.get(".css-11aywtz.r-6taxm2")
      .eq(1)
      .invoke("val")
      .then((inputVal) => {
        cy.get(".css-1rynq56")
          .invoke("text")
          .then((comparisonText) => {
            // Assert that both values exactly match
            expect(comparisonText.toLowerCase()).to.include(
              inputVal.toLowerCase(),
            );
          });
      });

    // check if there are atleast 6 search results for each category articles,
    // blogs, forums, related info
    cy.get(".styles__ListContainer-sc-1aohvhp-6.jaVibZ > li").should(
      "have.length.greaterThan",
      24,
    );

    cy.get(".styles__ListContainer-sc-1aohvhp-6.jaVibZ > li > a").each(($a) => {
      // For each link, assert that it has an href attribute
      expect($a).to.have.attr("href");
    });
  });
});
