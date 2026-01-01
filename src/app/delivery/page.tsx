import Link from "next/link";
import Container from "@/Components/Container";

const DeliveryPage = () => {
  return (
    <main>
      {/* Head */}
      <div className="py-10 bg-black text-white flex flex-col items-center gap-y-8">
        <h2 className="capitalize text-6xl">Çatdırılma</h2>
        <p className="flex items-center gap-x-1.5 text-xs">
          <Link
            className="uppercase hover:text-[#ffffffb3] font-medium"
            href="/"
          >
            Ana səhifə
          </Link>
          <span>/</span>
          <span className="uppercase">Çatdırılma</span>
        </p>
      </div>
      {/* Body */}
      <div>
        <Container>
          <div className="py-10 flex flex-col gap-y-5">
            <p>
              Məhsul saat 13:00-a dək sifariş edilərsə həmin gün, 13:00-dan
              sonra sifariş edilərsə növbəti iş günü sizə PULSUZ olaraq
              çatdırılacaq. İstənilən halda maksimal çatdırılma müddəti 24 iş
              saatını keçmir.
            </p>
            <p>
              İstisna (!) Məhsul stokda olmadığı halda çatdırılma müddəti 3-7 iş
              günü arasında dəyişə bilər. Sifariş zamanı bu nüanslar sizə
              bildirilir. Sifariş zamanı ünvanı dəqiq göstərməyi və həmin ünvana
              yaxın ərazini (orientir, nəyin yaxınlığında olması) göstərməyiniz
              xahiş olunur. Əgər ünvan səhvliyi səbəbindən kuryer sifarişi sizə
              çatdıra bilməzsə, sifarişiniz mağazaya geri qaytarılacaq və ünvan
              dəqiqləşdikdən sonra sizə çatdırılacaqdır.
            </p>
            <p>
              Əgər çatdırılma zamanı hər-hansı özəl bir istəyiniz varsa, sifariş
              zamanı əlavə qeydlərdə bu haqda bildirin və ya müştəri xidmətləri
              ilə əlaqə saxlayın.
            </p>
            <ul className="list-disc px-5">
              <li>
                Pulsuz çatdırılma, Bakı şəhəri daxilində 300 manat və daha çox
                alış veriş edənlərə şamil olunur.
              </li>
              <li>
                Bakı ətrafı yerlərə çatdırılma haqqı 5-10 manat arasında
                dəyişir.
              </li>
              <li>
                Rayonlara göndərilmə zamanı yalnız poçtun çatdırılma haqqı
                hesablanır.
              </li>
            </ul>
            <p>
              Sizdən bayram, qeyri iş günləri, o cümlədən kəskin mövsümü hava
              şəraitindən asılı olaraq çatdırılma zamanı kiçik ləngimələrə
              anlayışlı olmağı xahiş edirik.
            </p>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default DeliveryPage;
