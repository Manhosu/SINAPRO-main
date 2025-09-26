import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Building, 
  Bell, 
  Search, 
  Filter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// todo: remove mock functionality
const talents = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Diretora de Arte",
    experience: "8 anos",
    skills: ["Photoshop", "Illustrator", "Branding"],
    contact: "maria@email.com",
    phone: "(41) 99999-0001",
    location: "Curitiba",
  },
  {
    id: 2,
    name: "João Silva",
    role: "Copywriter",
    experience: "5 anos",
    skills: ["Redação", "SEO", "Content Marketing"],
    contact: "joao@email.com",
    phone: "(41) 99999-0002",
    location: "Londrina",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Social Media",
    experience: "3 anos",
    skills: ["Facebook Ads", "Instagram", "Analytics"],
    contact: "ana@email.com",
    phone: "(41) 99999-0003",
    location: "Maringá",
  },
];

const suppliers = [
  {
    id: 1,
    name: "Gráfica Premium",
    category: "Impressão",
    services: ["Offset", "Digital", "Grande Formato"],
    contact: "contato@graficapremium.com",
    phone: "(41) 3333-1111",
  },
  {
    id: 2,
    name: "Estúdio Áudio Pro",
    category: "Produção de Áudio",
    services: ["Locução", "Trilha Sonora", "Spot"],
    contact: "audio@studiopro.com",
    phone: "(41) 3333-2222",
  },
  {
    id: 3,
    name: "Video Solutions",
    category: "Audiovisual",
    services: ["Produção", "Edição", "Motion Graphics"],
    contact: "video@solutions.com",
    phone: "(41) 3333-3333",
  },
];

const updates = [
  {
    id: 1,
    title: "Nova atualização da plataforma",
    message: "Sistema de busca aprimorado com novos filtros.",
    date: "2 horas atrás",
    type: "system",
  },
  {
    id: 2,
    title: "Evento de networking em outubro",
    message: "Inscrições abertas para o encontro mensal.",
    date: "1 dia atrás",
    type: "event",
  },
  {
    id: 3,
    title: "Novo fornecedor cadastrado",
    message: "Estúdio de fotografia especializado em produto.",
    date: "3 dias atrás",
    type: "supplier",
  },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("talents");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTalents = talents.filter(talent =>
    talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    talent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Gerencie recursos e acompanhe atualizações</p>
            </div>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notificações
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Talentos Disponíveis</p>
                    <p className="text-2xl font-bold text-foreground">243</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Fornecedores Ativos</p>
                    <p className="text-2xl font-bold text-foreground">87</p>
                  </div>
                  <Building className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Atualizações</p>
                    <p className="text-2xl font-bold text-foreground">12</p>
                  </div>
                  <Bell className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-muted/50 rounded-lg p-1">
              <Button
                variant={activeTab === "talents" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setActiveTab("talents")}
                data-testid="tab-talents"
              >
                <Users className="h-4 w-4 mr-2" />
                Banco de Talentos
              </Button>
              <Button
                variant={activeTab === "suppliers" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setActiveTab("suppliers")}
                data-testid="tab-suppliers"
              >
                <Building className="h-4 w-4 mr-2" />
                Fornecedores
              </Button>
            </div>

            {/* Search */}
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={`Buscar ${activeTab === "talents" ? "talentos" : "fornecedores"}...`}
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            {activeTab === "talents" && (
              <div className="space-y-4">
                {filteredTalents.map((talent, index) => (
                  <motion.div
                    key={talent.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover-elevate" data-testid={`card-talent-${talent.id}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src="" alt={talent.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {talent.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-foreground">{talent.name}</h3>
                                <p className="text-sm text-muted-foreground">{talent.role}</p>
                              </div>
                              <Badge variant="secondary">{talent.experience}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {talent.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Mail className="h-3 w-3" />
                                <span>{talent.contact}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Phone className="h-3 w-3" />
                                <span>{talent.phone}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{talent.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "suppliers" && (
              <div className="space-y-4">
                {filteredSuppliers.map((supplier, index) => (
                  <motion.div
                    key={supplier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover-elevate" data-testid={`card-supplier-${supplier.id}`}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{supplier.name}</h3>
                            <p className="text-sm text-muted-foreground">{supplier.category}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {supplier.services.map((service) => (
                            <Badge key={service} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span>{supplier.contact}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{supplier.phone}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Updates */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Atualizações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {updates.map((update, index) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border-b border-border last:border-0 hover-elevate"
                      data-testid={`update-${update.id}`}
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm text-foreground">{update.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {update.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{update.message}</p>
                        <p className="text-xs text-muted-foreground">{update.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}