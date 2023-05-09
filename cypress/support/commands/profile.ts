export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + profileId,
        headers: { Authorization: 'abc' },
        body: {
            id: '4',
            firstname: 'testuser',
            lastname: 'testuser',
            age: 23,
            currency: 'USD',
            country: 'USA',
            city: 'New York',
            username: 'testuser',
            avatar: ''
        }
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            updateProfile(firstname: string, lastname: string): Chainable<void>

            resetProfile(profileId: string): Chainable<void>
        }
    }
}
