import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const properties = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/58dff525-2538-4c76-9a63-df04a71c85bc.jpg',
      title: 'Пентхаус в ЖК "Панорама"',
      location: 'Пресненский район',
      price: '185 000 000 ₽',
      area: '185 м²',
      rooms: 4,
      type: 'Премиум'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/b72197a5-3468-4e95-a389-6e81024884c7.jpg',
      title: 'Апартаменты в ЖК "Резиденция"',
      location: 'Хамовники',
      price: '125 000 000 ₽',
      area: '142 м²',
      rooms: 3,
      type: 'Элит'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/58dff525-2538-4c76-9a63-df04a71c85bc.jpg',
      title: 'Квартира с террасой',
      location: 'Замоскворечье',
      price: '95 000 000 ₽',
      area: '120 м²',
      rooms: 3,
      type: 'Премиум'
    }
  ];

  const agents = [
    {
      id: 1,
      name: 'Анна Соколова',
      position: 'Старший брокер',
      phone: '+7 (495) 123-45-67',
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/6b5c724d-b23e-41a1-b46e-f718c83e6203.jpg',
      deals: 156
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      position: 'Руководитель отдела',
      phone: '+7 (495) 123-45-68',
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/6b5c724d-b23e-41a1-b46e-f718c83e6203.jpg',
      deals: 203
    },
    {
      id: 3,
      name: 'Елена Волкова',
      position: 'Брокер',
      phone: '+7 (495) 123-45-69',
      image: 'https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/6b5c724d-b23e-41a1-b46e-f718c83e6203.jpg',
      deals: 98
    }
  ];

  const services = [
    { icon: 'Home', title: 'Покупка', description: 'Поможем найти идеальную недвижимость' },
    { icon: 'TrendingUp', title: 'Продажа', description: 'Быстро продадим по лучшей цене' },
    { icon: 'Calculator', title: 'Ипотека', description: 'Подберем выгодные условия' },
    { icon: 'FileText', title: 'Юридическое сопровождение', description: 'Безопасные сделки' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="sticky top-0 z-50 glass-effect border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">ЭЛИТ РЕЗИДЕНС</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#newbuildings" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Новостройки</a>
              <a href="#mortgage" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Ипотека</a>
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative h-[85vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/b72197a5-3468-4e95-a389-6e81024884c7.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Элитная недвижимость<br />в сердце Москвы
            </h1>
            <p className="text-xl text-white/90 mb-12 font-light">
              Эксклюзивные апартаменты и пентхаусы с панорамными видами
            </p>
            
            <div className="glass-effect rounded-2xl p-8 space-y-4 animate-scale-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="bg-white/90">
                    <SelectValue placeholder="Тип недвижимости" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Квартира</SelectItem>
                    <SelectItem value="penthouse">Пентхаус</SelectItem>
                    <SelectItem value="townhouse">Таунхаус</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="bg-white/90">
                    <SelectValue placeholder="Цена" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 млн ₽</SelectItem>
                    <SelectItem value="100-200">100-200 млн ₽</SelectItem>
                    <SelectItem value="200+">200+ млн ₽</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input 
                  placeholder="Площадь, м²" 
                  className="bg-white/90"
                />
                
                <Input 
                  placeholder="Район" 
                  className="bg-white/90"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                <Icon name="Search" size={18} className="mr-2" />
                Найти недвижимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4">Избранные объекты</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивная коллекция премиальной недвижимости с высочайшим уровнем комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">{property.type}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Home" size={16} className="mr-1" />
                      {property.rooms} комн.
                    </span>
                    <span className="flex items-center">
                      <Icon name="Maximize" size={16} className="mr-1" />
                      {property.area}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4">Наши эксперты</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Команда профессионалов с многолетним опытом на рынке элитной недвижимости
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card 
              key={agent.id} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-1 text-foreground">{agent.name}</h3>
                <p className="text-primary mb-4">{agent.position}</p>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    {agent.phone}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" size={16} className="mr-2" />
                    {agent.deals} успешных сделок
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="mortgage" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6">Ипотечные программы</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8">
                Мы сотрудничаем с ведущими банками и поможем вам подобрать оптимальные условия ипотечного кредитования
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Icon name="CheckCircle2" className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Ставка от 4.9%</h4>
                    <p className="text-sm text-muted-foreground">Специальные условия для клиентов агентства</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircle2" className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Первый взнос от 15%</h4>
                    <p className="text-sm text-muted-foreground">Гибкие условия первоначального взноса</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircle2" className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Срок до 30 лет</h4>
                    <p className="text-sm text-muted-foreground">Комфортный период кредитования</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Рассчитать ипотеку
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="glass-effect rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Быстрый расчет</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Стоимость недвижимости</label>
                    <Input placeholder="50 000 000 ₽" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Первоначальный взнос</label>
                    <Input placeholder="15 000 000 ₽" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Срок кредита</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срок" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 лет</SelectItem>
                        <SelectItem value="15">15 лет</SelectItem>
                        <SelectItem value="20">20 лет</SelectItem>
                        <SelectItem value="30">30 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Получить расчет
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newbuildings" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4">Новостройки</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивные жилые комплексы от ведущих девелоперов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-96 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/b72197a5-3468-4e95-a389-6e81024884c7.jpg"
                alt="ЖК Панорама"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">Аккредитация банков</Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-3 text-foreground">ЖК "Панорама"</h3>
              <div className="flex items-center text-muted-foreground mb-6">
                <Icon name="MapPin" size={18} className="mr-2" />
                <span>Пресненская набережная</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Срок сдачи</p>
                  <p className="font-semibold">III кв. 2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Цена от</p>
                  <p className="font-semibold text-primary">85 млн ₽</p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Узнать подробнее
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-96 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/bd88f9ee-9f8b-45fb-8870-f52f9e3bbd85/files/b72197a5-3468-4e95-a389-6e81024884c7.jpg"
                alt="ЖК Резиденция"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">Спецпредложение</Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-3 text-foreground">ЖК "Резиденция"</h3>
              <div className="flex items-center text-muted-foreground mb-6">
                <Icon name="MapPin" size={18} className="mr-2" />
                <span>Остоженка</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Срок сдачи</p>
                  <p className="font-semibold">IV кв. 2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Цена от</p>
                  <p className="font-semibold text-primary">120 млн ₽</p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Узнать подробнее
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-6">О компании</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ЭЛИТ РЕЗИДЕНС — ведущее агентство премиальной недвижимости с 15-летним опытом работы на московском рынке. 
              Мы специализируемся на эксклюзивных объектах в центральных районах столицы и предлагаем полный спектр услуг 
              по покупке, продаже и аренде элитной недвижимости.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">лет на рынке</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">2000+</div>
                <p className="text-muted-foreground">успешных сделок</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">объектов в портфеле</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Готовы ответить на все ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Офис</h3>
                  <p className="text-muted-foreground">Москва, Пресненская наб., 12<br />Башня "Федерация", 45 этаж</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67<br />Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 19:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@elitresidence.ru</p>
                </div>
              </div>
            </div>

            <Card className="p-8 border-0 shadow-xl animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Интересующая услуга" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Покупка</SelectItem>
                    <SelectItem value="sell">Продажа</SelectItem>
                    <SelectItem value="rent">Аренда</SelectItem>
                    <SelectItem value="mortgage">Ипотека</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="text-primary" size={28} />
                <span className="text-xl font-bold">ЭЛИТ РЕЗИДЕНС</span>
              </div>
              <p className="text-sm text-gray-400">
                Премиальная недвижимость в Москве с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Покупка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Продажа</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аренда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ипотека</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-gray-400 mb-4">Получайте новые предложения первыми</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 ЭЛИТ РЕЗИДЕНС. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
