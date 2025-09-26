import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_team_meeting_photo_f1521442.png";
import officeImage from "@assets/generated_images/Modern_agency_workspace_photo_feb80cbe.png";

const values = [
  {
    icon: Users,
    title: "União",
    description: "Fortalecemos o setor através da colaboração entre agências associadas.",
  },
  {
    icon: Target,
    title: "Excelência",
    description: "Promovemos os mais altos padrões de qualidade no mercado publicitário.",
  },
  {
    icon: Award,
    title: "Inovação",
    description: "Incentivamos a criatividade e a adoção de novas tecnologias.",
  },
  {
    icon: Heart,
    title: "Ética",
    description: "Defendemos práticas transparentes e responsáveis na publicidade.",
  },
];

const boardMembers = [
  {
    name: "Carlos Eduardo Mendes",
    role: "Presidente",
    agency: "Agência Criativa Plus",
    bio: "Mais de 20 anos de experiência no mercado publicitário paranaense.",
  },
  {
    name: "Maria Helena Costa",
    role: "Vice-Presidente",
    agency: "PubliMax Comunicação",
    bio: "Especialista em marketing digital e estratégias de comunicação integrada.",
  },
  {
    name: "Roberto Silva Santos",
    role: "Diretor Financeiro",
    agency: "Propaganda & Cia",
    bio: "Formado em Administração com MBA em Gestão Empresarial.",
  },
  {
    name: "Ana Paula Oliveira",
    role: "Diretora de Relações",
    agency: "Comunicação Total",
    bio: "Jornalista com especialização em Relações Públicas e Comunicação Corporativa.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Quem Somos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                O SINAPRO PR é o maior sindicato de agências de propaganda do Paraná, 
                representando e fortalecendo o mercado publicitário estadual há mais de duas décadas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={teamImage}
                  alt="Equipe SINAPRO PR"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    Nossa Missão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Representar, defender e promover os interesses das agências de propaganda 
                    associadas, fortalecendo o mercado publicitário paranaense através da 
                    capacitação profissional, networking qualificado e defesa dos direitos setoriais.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    Nossa Visão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconhecido como o principal catalisador do crescimento e 
                    desenvolvimento sustentável do mercado publicitário no Paraná, 
                    promovendo a excelência, inovação e ética profissional.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Os princípios que guiam nossas ações e fortalecem nossa comunidade.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300 text-center">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Diretoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conheça os profissionais que lideram o SINAPRO PR.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-elevate transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-heading font-semibold text-foreground">
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium">{member.role}</p>
                          <p className="text-sm text-muted-foreground">{member.agency}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Image */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Nosso Ambiente
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Um espaço moderno e colaborativo onde as melhores ideias do mercado 
                  publicitário paranaense ganham vida.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={officeImage}
                  alt="Escritório SINAPRO PR"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}