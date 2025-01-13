// components/SectionWrapper.tsx
type SectionWrapperProps = {
    id: string;
    backgroundColor?: string; // 省略可
    children: React.ReactNode;
};

export default function SectionWrapper({
    id,
    backgroundColor = 'bg-white',
    children,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`mx-auto max-w-screen-md px-4 py-8 ${backgroundColor}`}
        >
            {children}
        </section>
    );
}