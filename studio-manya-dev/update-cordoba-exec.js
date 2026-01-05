
const cordobaData = {
    "_id": "city-cordoba",
    "_type": "city",
    "title": "Córdoba",
    "slug": {
        "_type": "slug",
        "current": "cordoba"
    },
    "meta": {
        "title": "Agencia de Marketing Digital en Córdoba | MANYA Digital",
        "description": "Potenciá tu negocio en La Docta con nuestra agencia de marketing digital en Córdoba. SEO, Redes Sociales y Diseño Web para destacar en el mercado cordobés."
    },
    "hero": {
        "h1": "Tu Agencia de Marketing Digital en Córdoba",
        "subservices": [
            "SEO Local en Córdoba",
            "Gestión de Redes Sociales",
            "Diseño Web",
            "Publicidad Online",
            "Consultoría Estratégica"
        ]
    },
    "cta1": {
        "h2": "¿Querés crecer en Córdoba?",
        "p": "Córdoba es un mercado vibrante y competitivo. Si tu negocio no destaca digitalmente, estás perdiendo oportunidades frente a la competencia en La Docta. Te ayudamos a pisar fuerte.",
        "button": "Quiero destacar en Córdoba"
    },
    "why": {
        "h3": "¿Por qué invertir en marketing digital en Córdoba?",
        "points": [
            {
                "_key": "point-0",
                "title": "Mercado en Expansión",
                "description": "Córdoba es un hub tecnológico e industrial clave. La competencia digital crece día a día."
            },
            {
                "_key": "point-1",
                "title": "Alcance Local y Nacional",
                "description": "Desde Nueva Córdoba hasta el Cerro, llegá a tu público ideal y expandite al resto del país."
            },
            {
                "_key": "point-2",
                "title": "Turismo y Servicios",
                "description": "Si estás en turismo o servicios, el posicionamiento digital es vital para captar la demanda constante."
            },
            {
                "_key": "point-3",
                "title": "Innovación Cordobesa",
                "description": "El público cordobés valora la innovación. Una presencia digital moderna es tu carta de presentación."
            }
        ]
    },
    "cta2": {
        "h2": "Consultoría de Marketing en Córdoba Gratis",
        "button": "Agendar mi reunión"
    },
    "howWeHelp": {
        "h3": "Estrategias pensadas para el mercado cordobés",
        "p": "Conocemos la idiosincrasia de Córdoba. No aplicamos recetas genéricas, sino estrategias adaptadas a la realidad de tu negocio y tu competencia local.",
        "points": [
            "Auditoría de tu presencia digital actual en el mercado de Córdoba.",
            "Estrategias de SEO Local para aparecer en búsquedas \"cerca de mí\" en la ciudad.",
            "Campañas publicitarias segmentadas geográficamente con precisión.",
            "Contenido que conecta con el tono y estilo del público local.",
            "Reportes claros para que veas el retorno de tu inversión."
        ]
    },
    "factors": {
        "h3": "Claves para el éxito digital en Córdoba",
        "p": "Para triunfar en el centro del país, necesitás una combinación de factores:",
        "points": [
            "Visibilidad en Google Maps para búsquedas locales.",
            "Redes sociales activas que generen comunidad.",
            "Un sitio web rápido y adaptado a móviles.",
            "Reputación online positiva (reseñas y testimonios).",
            "Ofertas y promociones alineadas con el calendario local."
        ]
    },
    "rank": {
        "h3": "¿Podés liderar tu rubro en Córdoba?",
        "points": [
            {
                "_key": "point-0",
                "title": "Análisis de Competencia",
                "description": "Vemos qué están haciendo los líderes de tu sector en Córdoba y buscamos cómo superarlos."
            },
            {
                "_key": "point-1",
                "title": "Diferenciación",
                "description": "Encontramos tu ángulo único para que no seas \"uno más\" en el mercado."
            },
            {
                "_key": "point-2",
                "title": "Constancia",
                "description": "El marketing no es magia, es trabajo constante. Te acompañamos en el día a día."
            },
            {
                "_key": "point-3",
                "title": "Resultados Reales",
                "description": "Nos enfocamos en métricas de negocio: ventas, consultas y crecimiento."
            }
        ]
    },
    "position": {
        "h3": "Posicionate en el corazón del país",
        "p": "Córdoba es tierra de oportunidades para quienes se animan a innovar. Llevá tu negocio al siguiente nivel con una estrategia digital sólida y profesional.",
        "button": "Empezar ahora"
    },
    "faqs": [
        {
            "_key": "faq-0",
            "question": "¿Tienen experiencia con empresas de Córdoba?",
            "answer": "Sí, trabajamos con clientes de diversos rubros en Córdoba, entendiendo las particularidades del mercado local."
        },
        {
            "_key": "faq-1",
            "question": "¿Hacen reuniones presenciales en Córdoba?",
            "answer": "Trabajamos principalmente de forma remota para ser más ágiles y eficientes, pero estamos siempre conectados por videollamada y canales directos."
        },
        {
            "_key": "faq-2",
            "question": "¿Cómo adaptan la estrategia al público cordobés?",
            "answer": "Analizamos las tendencias de búsqueda locales y el comportamiento del consumidor en la región para crear mensajes que resuenen."
        },
        {
            "_key": "faq-3",
            "question": "¿Sirve el SEO para un negocio local en Córdoba?",
            "answer": "¡Es fundamental! El SEO Local te permite aparecer cuando alguien busca tus servicios en Google Maps o en el buscador desde Córdoba."
        },
        {
            "_key": "faq-4",
            "question": "¿Pueden manejar mis redes sociales?",
            "answer": "Claro que sí. Gestionamos tus perfiles en Instagram, Facebook, TikTok y LinkedIn con contenido relevante para tu audiencia."
        }
    ]
};

async function run({ getCliClient }) {
    const client = getCliClient({ apiVersion: '2024-01-01' });
    console.log('Update starting...');
    try {
        await client.createOrReplace(cordobaData);
        console.log('Update successful!');
    } catch (err) {
        console.error('Update failed:', err.message);
    }
}

module.exports = run;
