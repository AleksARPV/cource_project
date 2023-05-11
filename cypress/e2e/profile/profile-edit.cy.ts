let profileId = ''

describe('User login to the profile page', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then(data => {
            profileId = data.id
            cy.visit('profile/' + data.id)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('Profile is successfully loaded', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'testuser')
    })
    it('User editing Profile', () => {
        cy.updateProfile('new firstname', 'new lastname')
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'new firstname')
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'new lastname')
    })
})

export {}
