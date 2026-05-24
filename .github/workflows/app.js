const translations = {
  ar: {
    eyebrow: "سوق الجيران المفتوح",
    headline: "اعرض واشترِ من جيرانك القريبين",
    subhead: "تطبيق مجاني ومفتوح المصدر لبيع الأشياء والخدمات محلياً باستخدام موقعك الجغرافي.",
    useLocation: "استخدم موقعي",
    demoData: "بيانات تجريبية",
    locationStatus: "حالة الموقع",
    locationWaiting: "لم يتم تفعيل الموقع بعد",
    locationHint: "يمكنك رؤية المسافات عند السماح للمتصفح بالوصول للموقع.",
    locationReady: "تم تفعيل الموقع",
    locationDenied: "تعذر الوصول للموقع. يمكنك استخدام العروض التجريبية.",
    search: "بحث",
    searchPlaceholder: "دراجة، كتاب، خدمة...",
    category: "التصنيف",
    allCategories: "كل التصنيفات",
    home: "منزل",
    electronics: "إلكترونيات",
    services: "خدمات",
    kids: "أطفال",
    radius: "نطاق البحث",
    addListing: "أضف عرضاً",
    title: "العنوان",
    titlePlaceholder: "مثال: كرسي مكتب",
    price: "السعر",
    pricePlaceholder: "20",
    description: "الوصف",
    descriptionPlaceholder: "حالة المنتج، طريقة الاستلام...",
    publish: "نشر",
    nearby: "بالقرب منك",
    latestListings: "أحدث العروض",
    away: "كم",
    noResults: "لا توجد عروض مطابقة حالياً.",
    justNow: "قريب جداً"
  },
  en: {
    eyebrow: "Open neighborhood market",
    headline: "Buy and sell with nearby neighbors",
    subhead: "A free, open-source app for local goods and services using geolocation.",
    useLocation: "Use my location",
    demoData: "Demo data",
    locationStatus: "Location status",
    locationWaiting: "Location is not enabled yet",
    locationHint: "Distances appear after you allow browser location access.",
    locationReady: "Location enabled",
    locationDenied: "Location could not be accessed. Demo listings still work.",
    search: "Search",
    searchPlaceholder: "Bike, book, service...",
    category: "Category",
    allCategories: "All categories",
    home: "Home",
    electronics: "Electronics",
    services: "Services",
    kids: "Kids",
    radius: "Search radius",
    addListing: "Add listing",
    title: "Title",
    titlePlaceholder: "Example: office chair",
    price: "Price",
    pricePlaceholder: "20",
    description: "Description",
    descriptionPlaceholder: "Condition, pickup details...",
    publish: "Publish",
    nearby: "Near you",
    latestListings: "Latest listings",
    away: "km away",
    noResults: "No matching listings right now.",
    justNow: "Very close"
  },
  es: {
    eyebrow: "Mercado abierto del barrio",
    headline: "Compra y vende con vecinos cercanos",
    subhead: "Una app gratis y de código abierto para productos y servicios locales con geolocalización.",
    useLocation: "Usar mi ubicación",
    demoData: "Datos de demo",
    locationStatus: "Estado de ubicación",
    locationWaiting: "La ubicación aún no está activada",
    locationHint: "Las distancias aparecen al permitir la ubicación del navegador.",
    locationReady: "Ubicación activada",
    locationDenied: "No se pudo acceder a la ubicación. La demo sigue funcionando.",
    search: "Buscar",
    searchPlaceholder: "Bicicleta, libro, servicio...",
    category: "Categoría",
    allCategories: "Todas las categorías",
    home: "Hogar",
    electronics: "Electrónica",
    services: "Servicios",
    kids: "Niños",
    radius: "Radio de búsqueda",
    addListing: "Agregar anuncio",
    title: "Título",
    titlePlaceholder: "Ejemplo: silla de oficina",
    price: "Precio",
    pricePlaceholder: "20",
    description: "Descripción",
    descriptionPlaceholder: "Estado, detalles de recogida...",
    publish: "Publicar",
    nearby: "Cerca de ti",
    latestListings: "Anuncios recientes",
    away: "km",
    noResults: "No hay anuncios que coincidan ahora.",
    justNow: "Muy cerca"
  },
  fr: {
    eyebrow: "Marche ouvert du voisinage",
    headline: "Achetez et vendez avec vos voisins proches",
    subhead: "Une app gratuite et open source pour les biens et services locaux avec geolocalisation.",
    useLocation: "Utiliser ma position",
    demoData: "Donnees demo",
    locationStatus: "Etat de la position",
    locationWaiting: "La position n'est pas encore activee",
    locationHint: "Les distances apparaissent apres l'autorisation du navigateur.",
    locationReady: "Position activee",
    locationDenied: "Impossible d'acceder a la position. La demo reste disponible.",
    search: "Recherche",
    searchPlaceholder: "Velo, livre, service...",
    category: "Categorie",
    allCategories: "Toutes les categories",
    home: "Maison",
    electronics: "Electronique",
    services: "Services",
    kids: "Enfants",
    radius: "Rayon de recherche",
    addListing: "Ajouter une annonce",
    title: "Titre",
    titlePlaceholder: "Exemple : chaise de bureau",
    price: "Prix",
    pricePlaceholder: "20",
    description: "Description",
    descriptionPlaceholder: "Etat, details de retrait...",
    publish: "Publier",
    nearby: "Pres de vous",
    latestListings: "Dernieres annonces",
    away: "km",
    noResults: "Aucune annonce correspondante pour le moment.",
    justNow: "Tres proche"
  }
};

const demoListings = [
  {
    id: "demo-1",
    title: "Office chair",
    price: "25",
    description: "Clean ergonomic chair, pickup today.",
    category: "home",
    lat: 13.7565,
    lng: 100.502,
    color: "#1f6f68"
  },
  {
    id: "demo-2",
    title: "Bluetooth speaker",
    price: "18",
    description: "Small speaker with charging cable.",
    category: "electronics",
    lat: 13.751,
    lng: 100.494,
    color: "#c95f3f"
  },
  {
    id: "demo-3",
    title: "Math tutoring",
    price: "10/hr",
    description: "Weekend tutoring for middle school students.",
    category: "services",
    lat: 13.743,
    lng: 100.508,
    color: "#f0b84f"
  },
  {
    id: "demo-4",
    title: "Kids bicycle",
    price: "35",
    description: "Good condition, suitable for ages 6-8.",
    category: "kids",
    lat: 13.762,
    lng: 100.515,
    color: "#2e7d99"
  }
];

const state = {
  language: localStorage.getItem("language") || "ar",
  userLocation: null,
  listings: JSON.parse(localStorage.getItem("listings") || "[]")
};

const elements = {
  languageSelect: document.querySelector("#languageSelect"),
  installButton: document.querySelector("#installButton"),
  locationButton: document.querySelector("#locationButton"),
  seedButton: document.querySelector("#seedButton"),
  locationStatus: document.querySelector("#locationStatus"),
  locationHint: document.querySelector("#locationHint"),
  searchInput: document.querySelector("#searchInput"),
  categorySelect: document.querySelector("#categorySelect"),
  radiusInput: document.querySelector("#radiusInput"),
  radiusValue: document.querySelector("#radiusValue"),
  listingForm: document.querySelector("#listingForm"),
  titleInput: document.querySelector("#titleInput"),
  priceInput: document.querySelector("#priceInput"),
  descriptionInput: document.querySelector("#descriptionInput"),
  listings: document.querySelector("#listings"),
  resultCount: document.querySelector("#resultCount"),
  template: document.querySelector("#listingTemplate")
};

let deferredInstallPrompt = null;

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  elements.languageSelect.value = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  renderListings();
}

function saveListings() {
  localStorage.setItem("listings", JSON.stringify(state.listings));
}

function distanceKm(a, b) {
  const earthRadius = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadius * Math.asin(Math.sqrt(h));
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function getVisibleListings() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const category = elements.categorySelect.value;
  const radius = Number(elements.radiusInput.value);

  return state.listings
    .map((listing) => ({
      ...listing,
      distance: state.userLocation ? distanceKm(state.userLocation, listing) : null
    }))
    .filter((listing) => {
      const matchesSearch =
        !search ||
        listing.title.toLowerCase().includes(search) ||
        listing.description.toLowerCase().includes(search);
      const matchesCategory = category === "all" || listing.category === category;
      const matchesRadius = listing.distance === null || listing.distance <= radius;
      return matchesSearch && matchesCategory && matchesRadius;
    })
    .sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
}

function renderListings() {
  const listings = getVisibleListings();
  elements.listings.replaceChildren();
  elements.resultCount.textContent = listings.length;

  if (!listings.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = t("noResults");
    elements.listings.append(empty);
    return;
  }

  listings.forEach((listing) => {
    const card = elements.template.content.firstElementChild.cloneNode(true);
    card.querySelector(".listing-media").style.background = `linear-gradient(135deg, ${listing.color}, rgba(31, 111, 104, 0.72)), repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,.18) 12px, rgba(255,255,255,.18) 24px)`;
    card.querySelector("h3").textContent = listing.title;
    card.querySelector(".price").textContent = listing.price;
    card.querySelector(".description").textContent = listing.description;
    card.querySelector(".category").textContent = t(listing.category);
    card.querySelector(".distance").textContent =
      listing.distance === null
        ? t("locationWaiting")
        : listing.distance < 0.2
          ? t("justNow")
          : `${listing.distance.toFixed(1)} ${t("away")}`;
    elements.listings.append(card);
  });
}

function enableLocation() {
  if (!("geolocation" in navigator)) {
    elements.locationStatus.textContent = t("locationDenied");
    return;
  }

  elements.locationStatus.textContent = "...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      elements.locationStatus.textContent = t("locationReady");
      elements.locationHint.textContent = `${state.userLocation.lat.toFixed(4)}, ${state.userLocation.lng.toFixed(4)}`;
      renderListings();
    },
    () => {
      elements.locationStatus.textContent = t("locationDenied");
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function seedDemoListings() {
  const existingIds = new Set(state.listings.map((listing) => listing.id));
  const nextListings = demoListings.filter((listing) => !existingIds.has(listing.id));
  state.listings = [...state.listings, ...nextListings];
  saveListings();
  renderListings();
}

function addListing(event) {
  event.preventDefault();
  const baseLocation = state.userLocation || { lat: 13.7563, lng: 100.5018 };
  const listing = {
    id: crypto.randomUUID(),
    title: elements.titleInput.value.trim(),
    price: elements.priceInput.value.trim(),
    description: elements.descriptionInput.value.trim() || elements.titleInput.value.trim(),
    category: elements.categorySelect.value === "all" ? "home" : elements.categorySelect.value,
    lat: baseLocation.lat + (Math.random() - 0.5) / 150,
    lng: baseLocation.lng + (Math.random() - 0.5) / 150,
    color: ["#1f6f68", "#c95f3f", "#f0b84f", "#2e7d99"][Math.floor(Math.random() * 4)]
  };

  state.listings.unshift(listing);
  saveListings();
  elements.listingForm.reset();
  renderListings();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.installButton.classList.remove("hidden");
});

elements.installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installButton.classList.add("hidden");
});

elements.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("language", state.language);
  applyLanguage();
});

elements.locationButton.addEventListener("click", enableLocation);
elements.seedButton.addEventListener("click", seedDemoListings);
elements.searchInput.addEventListener("input", renderListings);
elements.categorySelect.addEventListener("change", renderListings);
elements.radiusInput.addEventListener("input", () => {
  elements.radiusValue.textContent = elements.radiusInput.value;
  renderListings();
});
elements.listingForm.addEventListener("submit", addListing);

applyLanguage();
seedDemoListings();
registerServiceWorker();
