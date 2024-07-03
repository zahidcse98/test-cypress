// Import data
const sites = require('../fixtures/sites.json');
const credentials = require('../fixtures/credentials.json');

describe('Daily Demo User Login Test', () => {
    // Iterate through each site
    sites.forEach(site => {
        it(`should login successfully to ${site.name}`, () => {
            // Visit the login page of the current site
            cy.visit(site.url);

            // Enter username and password
            cy.get('input[type=email]').type(credentials.username);
            cy.get('input[type=password]').type(credentials.password);

            // Submit the login form
            cy.get('button[type=submit]').click();

            // Validate login success by checking URL or dashboard elements
            cy.url().should('not.include', '/login');
            cy.url().should('include', '/dashboard');
        });
    });
});
