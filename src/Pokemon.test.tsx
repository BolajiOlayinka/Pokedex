import { render,screen, waitFor } from "@testing-library/react";
import AllList from './Components/AllList'

describe('Pokemon list', ()=>{
    it('should return the names of pokemon', async()=>{
        render(<AllList/>);
        await waitFor(()=>{
            screen.getByText("bulbasaur")
        })
    })
})