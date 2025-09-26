import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { TiltCard } from "@/components/motion/TiltCard";

// todo: remove mock functionality
const news = [
  {
    id: 1,
    title: "SINAPRO PR lança programa de capacitação digital para agências",
    excerpt: "Nova iniciativa oferece cursos gratuitos sobre marketing digital e ferramentas de automação para agências associadas.",
    date: "15 de Setembro, 2024",
    category: "Capacitação",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Evento de networking reúne mais de 200 profissionais em Curitiba",
    excerpt: "Encontro anual do SINAPRO PR facilita conexões estratégicas entre agências e fornecedores do mercado publicitário.",
    date: "8 de Setembro, 2024",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Banco de talentos registra crescimento de 40% em contratações",
    excerpt: "Plataforma do sindicato facilita conexão entre profissionais qualificados e agências em busca de novos talentos.",
    date: "1 de Setembro, 2024",
    category: "Mercado",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Últimas notícias
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fique por dentro das novidades do mercado publicitário e das ações do SINAPRO PR.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-news-${article.id}`}
            >
              <TiltCard className="h-full">
                <Card className="h-full glass-light shadow-premium transition-all duration-500 hover:shadow-premium-colored border-0 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg text-foreground leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Leia mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/noticias" data-testid="button-all-news">
              Ver todas as notícias
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}