import { CocktailBody } from "../components/cocktail/CocktailBody";
import { CocktaHeader } from "../components/cocktail/CocktailHeader";

export const Cocktails = () => {
    return (
        <MonLayout> 
           <CocktailHeader />
           <CocktailBody />
        </MonLayout>
    )
}