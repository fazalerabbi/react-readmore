import React, { FC, useState, useRef, useEffect } from "react";

type ReadMorePropType = {
    content: string;
    dangerouslySetInnerHTML?: boolean;
    classes?: string;
    styles?: Object;
    numberOfLinesClamp?: number;
    buttonClass?: string;
};

export const ReactReadMore: FC<ReadMorePropType> = (
    {
        classes = '',
        styles = {},
        numberOfLinesClamp = 3,
        content,
        dangerouslySetInnerHTML = false,
        buttonClass = ''
    }: ReadMorePropType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current && !isOpen) {
            const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
            const maxHeight = lineHeight * numberOfLinesClamp;

            if (textRef.current.offsetHeight > maxHeight) {
                textRef.current.style.overflow = 'hidden';
                textRef.current.style.height = `${maxHeight + lineHeight / 2}px`;
            }
        } else if (textRef.current && isOpen) {
            textRef.current.style.overflow = 'visible';
            textRef.current.style.height = 'auto';
        }
    }, [isOpen, numberOfLinesClamp]);

    return (
        <>
            <div ref={textRef} className={classes} style={styles}>
                {
                    dangerouslySetInnerHTML ? (
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                    ) : content
                }
            </div>
            <button className={buttonClass} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Read Less' : 'Read More'}
            </button>
        </>
    );
}

export default ReactReadMore;