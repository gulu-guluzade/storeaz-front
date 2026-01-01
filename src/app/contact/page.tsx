import ContactInfo from "@/Components/ContactInfo";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import Map from "@/Components/Map";

const ContactPage = () => {
  return (
    <main>
      <section>
        <Map />
      </section>
      <section>
        <Container>
          <div className="py-10 grid grid-cols-[1fr_auto_1fr] gap-x-10">
            <div className="flex flex-col gap-y-6">
              <h3 className="text-[#242424] text-2xl font-bold">
                SORĞU GÖNDƏR
              </h3>
              <Form />
            </div>
            <div className="h-full w-px bg-gray-300"></div>
            <div className="flex flex-col gap-y-6">
              <h3 className="text-[#242424] text-2xl font-bold">
                ƏLAQƏ MƏLUMATLARI
              </h3>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ContactPage;
