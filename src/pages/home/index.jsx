
import FeaturedPost from "../../components/featured-post"
import PostList from '../../components/post-list/index'
import image from '../../assets/images/post1.jpg'
export default function Home(){
    const data = [

        {
            image : "https://thumbs.dreamstime.com/z/dessert-three-layers-chocolates-mousse-vanilla-chocolate-creme-brulee-dark-background-place-text-top-view-256715675.jpg",
            date : "July 2, 2022",
            title : "Primeira Postagem",
            description : "Quando você vai a uma consulta e o médico prescreve um medicamento pronto, industrializado, este já tem uma série de parâmetros estabelecidos. Entre eles, estão a concentração dos princípios ativos, a forma farmacêutica (se líquido, em pó, em cápsulas etc), o excipiente (substância que acompanha o princípio ativo) e a quantidade. Termos técnicos, mas que significam que é um produto pronto e imutável produzido por uma indústria distante."
        },
        {
            image : "https://thumbs.dreamstime.com/z/highway-road-busy-hours-city-downtown-background-64744044.jpg",
            date : "July 1, 2022",
            title : "Urgente, promoção de ultima hora",
            description : "Quando você vai a uma consulta e o médico prescreve um medicamento pronto, industrializado, este já tem uma série de parâmetros estabelecidos. Entre eles, estão a concentração dos princípios ativos, a forma farmacêutica (se líquido, em pó, em cápsulas etc), o excipiente (substância que acompanha o princípio ativo) e a quantidade. Termos técnicos, mas que significam que é um produto pronto e imutável produzido por uma indústria distante."
        },
        {
            image : "https://thumbs.dreamstime.com/z/busy-hours-office-night-la-defense-district-paris-huge-car-tram-metro-traffic-toward-modern-buildings-256715247.jpg",
            date : "July 2, 2021",
            title : "Ja ouviu falar do poder das vitaminas?",
            description : "Quando você vai a uma consulta e o médico prescreve um medicamento pronto, industrializado, este já tem uma série de parâmetros estabelecidos. Entre eles, estão a concentração dos princípios ativos, a forma farmacêutica (se líquido, em pó, em cápsulas etc), o excipiente (substância que acompanha o princípio ativo) e a quantidade. Termos técnicos, mas que significam que é um produto pronto e imutável produzido por uma indústria distante."
        },
        
    ]

    return(
    <div>
      { data &&  <FeaturedPost post={data[0]}/> }
        <PostList posts={data}/>
    </div>
    )
}