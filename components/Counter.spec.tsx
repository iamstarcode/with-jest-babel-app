import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import user from '@testing-library/user-event'

describe("Counter", () => {

    describe('Initialized with defaultCounter=10 and description="WWW"', () => {
        beforeEach(() => {
            render(<Counter defaultCounter={10} description="WWW" />)
        })

        it('Renders title as "WWW"', () => {
            expect(screen.getByText(/WWW/)).toBeInTheDocument()
        })

        it('Renders cureent count to 10', () => {
            expect(screen.getByText('Current count:10')).toBeInTheDocument()
        })

        describe('When the the incremenatal changes to 5 and "+" button is clicked', () => {
            beforeEach(async () => {
                user.clear(screen.getByRole('textbox'))
                await user.type(screen.getByText(/Incrementer/), '5')
                user.click(screen.getByRole('button', { name: "Increment counter" }))
            })

            it('Renders current count to 15', async () => {
                expect(await screen.findByText('Current count:15')).toBeInTheDocument()
            })
        })
    })

    describe('Initialized with defaultCounter=0 and description="My counter"', () => {

        beforeEach(() => {
            render(<Counter defaultCounter={0} description="My Counter" />)
        })

        it('Renders title as "Mycounter"', () => {
            expect(screen.getByText(/My Counter/)).toBeInTheDocument()
        })

        it('Renders cureent count to 0', () => {
            expect(screen.getByText('Current count:0')).toBeInTheDocument()
        })

        describe("When the button + is clicked", () => {
            fit('The defaultCount is 1', () => {
                fireEvent.click(screen.getByRole('button', { name: 'Increment counter' }))
                expect(screen.getByText('Current count:1')).toBeInTheDocument()
            });
        })

        describe("When the button - is   clicked", () => {
            it('The defaultCount is -1', () => {
                fireEvent.click(screen.getByRole('button', { name: 'Decrement counter' }))
                expect(screen.getByText('Current count:-1')).toBeInTheDocument()
            });
        })

    })
})


