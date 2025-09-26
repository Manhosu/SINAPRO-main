import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Criativo",
    agency: "Agência Inovadora",
    content: "O SINAPRO PR revolucionou nossa forma de encontrar talentos. Em poucos dias conseguimos contratar o profissional ideal para nossa equipe.",
    avatar: "CM",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    role: "CEO",
    agency: "PubliMax",
    content: "A rede de fornecedores do sindicato nos proporcionou parcerias estratégicas que aumentaram nossa margem de lucro em 30%.",
    avatar: "AS",
    rating: 5,
  },
  {
    name: "Roberto Costa",
    role: "Diretor Geral",
    agency: "Propaganda & Cia",
    content: "Os eventos de networking são excepcionais. Fechamos contratos importantes através das conexões feitas nas reuniões do SINAPRO PR.",
    avatar: "RC",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            O que dizem nossas agências associadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de sucesso de agências que cresceram junto com o SINAPRO PR.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-testid={`card-testimonial-${index}`}
            >
              <Card className="h-full hover-elevate transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.agency}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}