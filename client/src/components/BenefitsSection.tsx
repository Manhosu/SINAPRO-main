import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp, Shield, Lightbulb, Network } from "lucide-react";
import { TiltCard } from "@/components/motion/TiltCard";

const benefits = [
  {
    icon: Users,
    title: "Banco de Talentos",
    description: "Acesso exclusivo a profissionais qualificados do mercado publicitário paranaense.",
  },
  {
    icon: Briefcase,
    title: "Rede de Fornecedores",
    description: "Conecte-se com os melhores fornecedores e parceiros estratégicos do setor.",
  },
  {
    icon: TrendingUp,
    title: "Oportunidades de Negócio",
    description: "Participe de licitações e projetos exclusivos para agências associadas.",
  },
  {
    icon: Shield,
    title: "Defesa de Interesses",
    description: "Representação sindical forte para defender os direitos das agências.",
  },
  {
    icon: Lightbulb,
    title: "Capacitação Profissional",
    description: "Cursos, workshops e eventos para manter sua equipe sempre atualizada.",
  },
  {
    icon: Network,
    title: "Networking Qualificado",
    description: "Conecte-se com outros líderes do mercado publicitário em eventos exclusivos.",
  },
];

export function BenefitsSection() {
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
            Por que escolher o SINAPRO PR?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos benefícios exclusivos que impulsionam o crescimento e 
            fortalecimento das agências de propaganda no Paraná.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-benefit-${index}`}
            >
              <TiltCard className="h-full">
                <Card className="h-full glass-light shadow-premium-colored transition-all duration-500 hover:shadow-premium border-0">
                  <CardContent className="p-8 space-y-6">
                    <motion.div 
                      className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 blur-xl" />
                      <benefit.icon className="h-8 w-8 text-primary relative z-10" />
                    </motion.div>
                    <div className="space-y-3">
                      <h3 className="fluid-text-xl font-heading font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed fluid-text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}