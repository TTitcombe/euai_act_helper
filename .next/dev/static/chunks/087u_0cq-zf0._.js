(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/personal/projects/euai_act_helper/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "error",
    ()=>error,
    "reset",
    ()=>reset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
let set;
if ("TURBOPACK compile-time truthy", 1) {
    set = new Set();
}
function error(...messages) {
    if ("TURBOPACK compile-time truthy", 1) {
        const messageKey = messages.join(' ');
        if (!set.has(messageKey)) {
            set.add(messageKey);
            console.error(`Base UI: ${messageKey}`);
        }
    }
}
function reset() {
    set?.clear();
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRootContext",
    ()=>CompositeRootContext,
    "useCompositeRootContext",
    ()=>useCompositeRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusableWhenDisabled",
    ()=>useFocusableWhenDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFocusableWhenDisabled.useMemo[props]": ()=>{
            const additionalProps = {
                // allow Tabbing away from focusableWhenDisabled elements
                onKeyDown (event) {
                    if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                        event.preventDefault();
                    }
                }
            };
            if (!composite) {
                additionalProps.tabIndex = tabIndexProp;
                if (!isNativeButton && disabled) {
                    additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
                }
            }
            if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
                additionalProps['aria-disabled'] = disabled;
            }
            if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
                additionalProps.disabled = disabled;
            }
            return additionalProps;
        }
    }["useFocusableWhenDisabled.useMemo[props]"], [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return {
        props
    };
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const compositeRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeRootContext"])(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
    const { props: focusableWhenDisabledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusableWhenDisabled"])({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useButton.useEffect": ()=>{
                if (!elementRef.current) {
                    return;
                }
                const isButtonTag = isButtonElement(elementRef.current);
                if (isNativeButton) {
                    if (!isButtonTag) {
                        const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                        const message = 'A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Use a real <button> in the ' + '`render` prop, or set `nativeButton` to `false`.';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                    }
                } else if (isButtonTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = 'A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while Base UI applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set ' + '`nativeButton` to `true`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            }
        }["useButton.useEffect"], [
            isNativeButton
        ]);
    }
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[updateDisabled]": ()=>{
            const element = elementRef.current;
            if (!isButtonElement(element)) {
                return;
            }
            if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
                element.disabled = false;
            }
        }
    }["useButton.useCallback[updateDisabled]"], [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[getButtonProps]": (externalProps = {})=>{
            const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
            const type = isNativeButton ? 'button' : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                type,
                onClick (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnClick?.(event);
                },
                onMouseDown (event) {
                    if (!disabled) {
                        externalOnMouseDown?.(event);
                    }
                },
                onKeyDown (event) {
                    if (disabled) {
                        return;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                    externalOnKeyDown?.(event);
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    const isCurrentTarget = event.target === event.currentTarget;
                    const currentTarget = event.currentTarget;
                    const isButton = isButtonElement(currentTarget);
                    const isLink = !isNativeButton && isValidLinkElement(currentTarget);
                    const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
                    const isEnterKey = event.key === 'Enter';
                    const isSpaceKey = event.key === ' ';
                    const role = currentTarget.getAttribute('role');
                    const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
                    if (isCurrentTarget && isCompositeItem && isSpaceKey) {
                        if (event.defaultPrevented && isTextNavigationRole) {
                            return;
                        }
                        event.preventDefault();
                        if (isLink || isNativeButton && isButton) {
                            currentTarget.click();
                            event.preventBaseUIHandler();
                        } else if (shouldClick) {
                            externalOnClick?.(event);
                            event.preventBaseUIHandler();
                        }
                        return;
                    }
                    // Keyboard accessibility for native and non-native elements.
                    if (shouldClick) {
                        if (!isNativeButton && (isSpaceKey || isEnterKey)) {
                            event.preventDefault();
                        }
                        if (!isNativeButton && isEnterKey) {
                            externalOnClick?.(event);
                        }
                    }
                },
                onKeyUp (event) {
                    if (disabled) {
                        return;
                    }
                    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                    externalOnKeyUp?.(event);
                    if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
                        event.preventDefault();
                        return;
                    }
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    // Keyboard accessibility for non interactive elements
                    if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === ' ') {
                        externalOnClick?.(event);
                    }
                },
                onPointerDown (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnPointerDown?.(event);
                }
            }, !isNativeButton ? {
                role: 'button'
            } : undefined, focusableWhenDisabledProps, otherExternalProps);
        }
    }["useButton.useCallback[getButtonProps]"], [
        disabled,
        focusableWhenDisabledProps,
        isCompositeItem,
        isNativeButton
    ]);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useButton.useStableCallback[buttonRef]": (element)=>{
            elementRef.current = element;
            updateDisabled();
        }
    }["useButton.useStableCallback[buttonRef]"]);
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === 'A' && elem?.href);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControlDataAttributes",
    ()=>FieldControlDataAttributes
]);
let FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
    /**
   * Present when the field is disabled.
   */ FieldControlDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the field is in valid state.
   */ FieldControlDataAttributes["valid"] = "data-valid";
    /**
   * Present when the field is in invalid state.
   */ FieldControlDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the field has been touched.
   */ FieldControlDataAttributes["touched"] = "data-touched";
    /**
   * Present when the field's value has changed.
   */ FieldControlDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the field is filled.
   */ FieldControlDataAttributes["filled"] = "data-filled";
    /**
   * Present when the field control is focused.
   */ FieldControlDataAttributes["focused"] = "data-focused";
    return FieldControlDataAttributes;
}({});
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FIELD_ROOT_STATE",
    ()=>DEFAULT_FIELD_ROOT_STATE,
    "DEFAULT_FIELD_STATE_ATTRIBUTES",
    ()=>DEFAULT_FIELD_STATE_ATTRIBUTES,
    "DEFAULT_VALIDITY_STATE",
    ()=>DEFAULT_VALIDITY_STATE,
    "fieldValidityMapping",
    ()=>fieldValidityMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)");
;
const DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
    valid (value) {
        if (value === null) {
            return null;
        }
        if (value) {
            return {
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].valid]: ''
            };
        }
        return {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].invalid]: ''
        };
    }
};
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRootContext",
    ()=>FieldRootContext,
    "useFieldRootContext",
    ()=>useFieldRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const FieldRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    invalid: undefined,
    name: undefined,
    validityData: {
        state: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        errors: [],
        error: '',
        value: '',
        initialValue: null
    },
    setValidityData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    disabled: undefined,
    touched: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].touched,
    setTouched: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    dirty: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].dirty,
    setDirty: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    filled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].filled,
    setFilled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    focused: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].focused,
    setFocused: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validate: ()=>null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>false,
    state: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_ROOT_STATE"],
    markedDirtyRef: {
        current: false
    },
    validation: {
        getValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        getInputValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
if ("TURBOPACK compile-time truthy", 1) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldRootContext);
    if (context.setValidityData === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"] && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldsetRootContext",
    ()=>FieldsetRootContext,
    "useFieldsetRootContext",
    ()=>useFieldsetRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time truthy", 1) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "useFormContext",
    ()=>useFormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time truthy", 1) FormContext.displayName = "FormContext";
function useFormContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormContext);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableContext",
    ()=>LabelableContext,
    "useLabelableContext",
    ()=>useLabelableContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    controlId: undefined,
    registerControlId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time truthy", 1) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LabelableContext);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableProvider",
    ()=>LabelableProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LabelableProvider = function LabelableProvider(props) {
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const initialControlId = props.controlId === undefined ? defaultId : props.controlId;
    const [controlId, setControlIdState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialControlId);
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](props.labelId);
    const [messageIds, setMessageIds] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const registrationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "LabelableProvider.useRefWithInit[registrationsRef]": ()=>new Map()
    }["LabelableProvider.useRefWithInit[registrationsRef]"]);
    const { messageIds: parentMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const registerControlId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "LabelableProvider.useStableCallback[registerControlId]": (source, nextId)=>{
            const registrations = registrationsRef.current;
            if (nextId === undefined) {
                registrations.delete(source);
                return;
            }
            registrations.set(source, nextId);
            // Only flush when registering, not when unregistering.
            // This prevents loops during rapid unmount/remount cycles (e.g. React Activity).
            // The next registration will pick up the correct state.
            setControlIdState({
                "LabelableProvider.useStableCallback[registerControlId]": (prev)=>{
                    if (registrations.size === 0) {
                        return undefined;
                    }
                    let nextControlId;
                    for (const id of registrations.values()){
                        if (prev !== undefined && id === prev) {
                            return prev;
                        }
                        if (nextControlId === undefined) {
                            nextControlId = id;
                        }
                    }
                    return nextControlId;
                }
            }["LabelableProvider.useStableCallback[registerControlId]"]);
        }
    }["LabelableProvider.useStableCallback[registerControlId]"]);
    const getDescriptionProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "LabelableProvider.useCallback[getDescriptionProps]": (externalProps)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                'aria-describedby': parentMessageIds.concat(messageIds).join(' ') || undefined
            }, externalProps);
        }
    }["LabelableProvider.useCallback[getDescriptionProps]"], [
        parentMessageIds,
        messageIds
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LabelableProvider.useMemo[contextValue]": ()=>({
                controlId,
                registerControlId,
                labelId,
                setLabelId,
                messageIds,
                setMessageIds,
                getDescriptionProps
            })
    }["LabelableProvider.useMemo[contextValue]"], [
        controlId,
        registerControlId,
        labelId,
        setLabelId,
        messageIds,
        setMessageIds,
        getDescriptionProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableContext"].Provider, {
        value: contextValue,
        children: props.children
    });
};
if ("TURBOPACK compile-time truthy", 1) LabelableProvider.displayName = "LabelableProvider";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combines the field's client-side, stateful validity data with the external invalid state to
 * determine the field's true validity.
 */ __turbopack_context__.s([
    "getCombinedFieldValidityData",
    ()=>getCombinedFieldValidityData
]);
function getCombinedFieldValidityData(validityData, invalid) {
    return {
        ...validityData,
        state: {
            ...validityData.state,
            valid: !invalid && validityData.state.valid
        }
    };
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFieldValidation",
    ()=>useFieldValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const validityKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"]);
function isOnlyValueMissing(state) {
    if (!state || state.valid || !state.valueMissing) {
        return false;
    }
    let onlyValueMissing = false;
    for (const key of validityKeys){
        if (key === 'valid') {
            continue;
        }
        if (key === 'valueMissing') {
            onlyValueMissing = state[key];
        }
        if (state[key]) {
            onlyValueMissing = false;
        }
    }
    return onlyValueMissing;
}
function useFieldValidation(params) {
    const { formRef, clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, name, shouldValidateOnChange } = params;
    const { controlId, getDescriptionProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const commit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useFieldValidation.useStableCallback[commit]": async (value, revalidate = false)=>{
            const element = inputRef.current;
            if (!element) {
                return;
            }
            if (revalidate) {
                if (state.valid !== false) {
                    return;
                }
                const currentNativeValidity = element.validity;
                if (!currentNativeValidity.valueMissing) {
                    // The 'valueMissing' (required) condition has been resolved by the user typing.
                    // Temporarily mark the field as valid for this onChange event.
                    // Other native errors (e.g., typeMismatch) will be caught by full validation on blur or submit.
                    const nextValidityData = {
                        value,
                        state: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
                            valid: true
                        },
                        error: '',
                        errors: [],
                        initialValue: validityData.initialValue
                    };
                    element.setCustomValidity('');
                    if (controlId) {
                        const currentFieldData = formRef.current.fields.get(controlId);
                        if (currentFieldData) {
                            formRef.current.fields.set(controlId, {
                                ...currentFieldData,
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(nextValidityData, false) // invalid = false
                            });
                        }
                    }
                    setValidityData(nextValidityData);
                    return;
                }
                // Value is still missing, or other conditions apply.
                // Let's use a representation of current validity for isOnlyValueMissing.
                const currentNativeValidityObject = validityKeys.reduce({
                    "useFieldValidation.useStableCallback[commit].currentNativeValidityObject": (acc, key)=>{
                        acc[key] = currentNativeValidity[key];
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].currentNativeValidityObject"], {});
                // If it's (still) natively invalid due to something other than just valueMissing,
                // then bail from this revalidation on change to avoid "scolding" for other errors.
                if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
                    return;
                }
            // If valueMissing is still true AND it's the only issue, or if the field is now natively valid,
            // let it fall through to the main validation logic below.
            }
            function getState(el) {
                const computedState = validityKeys.reduce({
                    "useFieldValidation.useStableCallback[commit].getState.computedState": (acc, key)=>{
                        acc[key] = el.validity[key];
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].getState.computedState"], {});
                let hasOnlyValueMissingError = false;
                for (const key of validityKeys){
                    if (key === 'valid') {
                        continue;
                    }
                    if (key === 'valueMissing' && computedState[key]) {
                        hasOnlyValueMissingError = true;
                    } else if (computedState[key]) {
                        return computedState;
                    }
                }
                // Only make `valueMissing` mark the field invalid if it's been changed
                // to reduce error noise.
                if (hasOnlyValueMissingError && !markedDirtyRef.current) {
                    computedState.valid = true;
                    computedState.valueMissing = false;
                }
                return computedState;
            }
            timeout.clear();
            let result = null;
            let validationErrors = [];
            const nextState = getState(element);
            let defaultValidationMessage;
            const validateOnChange = shouldValidateOnChange();
            if (element.validationMessage && !validateOnChange) {
                // not validating on change, if there is a `validationMessage` from
                // native validity, set errors and skip calling the custom validate fn
                defaultValidationMessage = element.validationMessage;
                validationErrors = [
                    element.validationMessage
                ];
            } else {
                // call the validate function because either
                // - validating on change, or
                // - native constraint validations passed, custom validity check is next
                const formValues = Array.from(formRef.current.fields.values()).reduce({
                    "useFieldValidation.useStableCallback[commit].formValues": (acc, field)=>{
                        if (field.name) {
                            acc[field.name] = field.getValue();
                        }
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].formValues"], {});
                const resultOrPromise = validate(value, formValues);
                if (typeof resultOrPromise === 'object' && resultOrPromise !== null && 'then' in resultOrPromise) {
                    result = await resultOrPromise;
                } else {
                    result = resultOrPromise;
                }
                if (result !== null) {
                    nextState.valid = false;
                    nextState.customError = true;
                    if (Array.isArray(result)) {
                        validationErrors = result;
                        element.setCustomValidity(result.join('\n'));
                    } else if (result) {
                        validationErrors = [
                            result
                        ];
                        element.setCustomValidity(result);
                    }
                } else if (validateOnChange) {
                    // validate function returned no errors, if validating on change
                    // we need to clear the custom validity state
                    element.setCustomValidity('');
                    nextState.customError = false;
                    if (element.validationMessage) {
                        defaultValidationMessage = element.validationMessage;
                        validationErrors = [
                            element.validationMessage
                        ];
                    } else if (element.validity.valid && !nextState.valid) {
                        nextState.valid = true;
                    }
                }
            }
            const nextValidityData = {
                value,
                state: nextState,
                error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ''),
                errors: validationErrors,
                initialValue: validityData.initialValue
            };
            if (controlId) {
                const currentFieldData = formRef.current.fields.get(controlId);
                if (currentFieldData) {
                    formRef.current.fields.set(controlId, {
                        ...currentFieldData,
                        // Keep Form-level errors part of overall field validity for submit blocking/focus logic.
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(nextValidityData, invalid)
                    });
                }
            }
            setValidityData(nextValidityData);
        }
    }["useFieldValidation.useStableCallback[commit]"]);
    const getValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFieldValidation.useCallback[getValidationProps]": (externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(getDescriptionProps, state.valid === false ? {
                'aria-invalid': true
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], externalProps)
    }["useFieldValidation.useCallback[getValidationProps]"], [
        getDescriptionProps,
        state.valid
    ]);
    const getInputValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFieldValidation.useCallback[getInputValidationProps]": (externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                onChange (event) {
                    // Workaround for https://github.com/facebook/react/issues/9023
                    if (event.nativeEvent.defaultPrevented) {
                        return;
                    }
                    clearErrors(name);
                    if (!shouldValidateOnChange()) {
                        commit(event.currentTarget.value, true);
                        return;
                    }
                    // When validating on change, run client-side validation even if
                    // externally invalid
                    const element = event.currentTarget;
                    if (element.value === '') {
                        // Ignore the debounce time for empty values.
                        commit(element.value);
                        return;
                    }
                    timeout.clear();
                    if (validationDebounceTime) {
                        timeout.start(validationDebounceTime, {
                            "useFieldValidation.useCallback[getInputValidationProps]": ()=>{
                                commit(element.value);
                            }
                        }["useFieldValidation.useCallback[getInputValidationProps]"]);
                    } else {
                        commit(element.value);
                    }
                }
            }, getValidationProps(externalProps))
    }["useFieldValidation.useCallback[getInputValidationProps]"], [
        getValidationProps,
        clearErrors,
        name,
        timeout,
        commit,
        validationDebounceTime,
        shouldValidateOnChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFieldValidation.useMemo": ()=>({
                getValidationProps,
                getInputValidationProps,
                inputRef,
                commit
            })
    }["useFieldValidation.useMemo"], [
        getValidationProps,
        getInputValidationProps,
        commit
    ]);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRoot",
    ()=>FieldRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const FieldRootInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRootInner(componentProps, forwardedRef) {
    const { errors, validationMode: formValidationMode, submitAttemptedRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, ...elementProps } = componentProps;
    const { disabled: disabledFieldset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsetRootContext"])();
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(validateProp || ({
        "FieldRootInner.FieldRootInner.useStableCallback[validate]": ()=>null
    })["FieldRootInner.FieldRootInner.useStableCallback[validate]"]);
    const disabled = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [dirtyState, setDirtyUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [filled, setFilled] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [focused, setFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const setDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[setDirty]": (value)=>{
            if (dirtyProp !== undefined) {
                return;
            }
            if (value) {
                markedDirtyRef.current = true;
            }
            setDirtyUnwrapped(value);
        }
    }["FieldRootInner.FieldRootInner.useStableCallback[setDirty]"]);
    const setTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[setTouched]": (value)=>{
            if (touchedProp !== undefined) {
                return;
            }
            setTouchedUnwrapped(value);
        }
    }["FieldRootInner.FieldRootInner.useStableCallback[setTouched]"]);
    const shouldValidateOnChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[shouldValidateOnChange]": ()=>validationMode === 'onChange' || validationMode === 'onSubmit' && submitAttemptedRef.current
    }["FieldRootInner.FieldRootInner.useStableCallback[shouldValidateOnChange]"]);
    const hasFormError = !!name && Object.hasOwn(errors, name) && errors[name] !== undefined;
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        state: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        error: '',
        errors: [],
        value: null,
        initialValue: null
    });
    const valid = !invalid && validityData.state.valid;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldRootInner.FieldRootInner.useMemo[state]": ()=>({
                disabled,
                touched,
                dirty,
                valid,
                filled,
                focused
            })
    }["FieldRootInner.FieldRootInner.useMemo[state]"], [
        disabled,
        touched,
        dirty,
        valid,
        filled,
        focused
    ]);
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldValidation"])({
        setValidityData,
        validate,
        validityData,
        validationDebounceTime,
        invalid,
        markedDirtyRef,
        state,
        name,
        shouldValidateOnChange
    });
    const handleImperativeValidate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FieldRootInner.FieldRootInner.useCallback[handleImperativeValidate]": ()=>{
            markedDirtyRef.current = true;
            validation.commit(validityData.value);
        }
    }["FieldRootInner.FieldRootInner.useCallback[handleImperativeValidate]"], [
        validation,
        validityData
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, {
        "FieldRootInner.FieldRootInner.useImperativeHandle": ()=>({
                validate: handleImperativeValidate
            })
    }["FieldRootInner.FieldRootInner.useImperativeHandle"], [
        handleImperativeValidate
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldRootInner.FieldRootInner.useMemo[contextValue]": ()=>({
                invalid,
                name,
                validityData,
                setValidityData,
                disabled,
                touched,
                setTouched,
                dirty,
                setDirty,
                filled,
                setFilled,
                focused,
                setFocused,
                validate,
                validationMode,
                validationDebounceTime,
                shouldValidateOnChange,
                state,
                markedDirtyRef,
                validation
            })
    }["FieldRootInner.FieldRootInner.useMemo[contextValue]"], [
        invalid,
        name,
        validityData,
        disabled,
        touched,
        setTouched,
        dirty,
        setDirty,
        filled,
        setFilled,
        focused,
        setFocused,
        validate,
        validationMode,
        validationDebounceTime,
        shouldValidateOnChange,
        state,
        validation
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRootContext"].Provider, {
        value: contextValue,
        children: element
    });
});
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ if ("TURBOPACK compile-time truthy", 1) FieldRootInner.displayName = "FieldRootInner";
const FieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRoot(componentProps, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldRootInner, {
            ...componentProps,
            ref: forwardedRef
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldRoot.displayName = "FieldRoot";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredLabelId",
    ()=>useRegisteredLabelId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
function useRegisteredLabelId(idProp, setLabelId) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
            setLabelId(id);
            return ({
                "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
                    setLabelId(undefined);
                }
            })["useRegisteredLabelId.useIsoLayoutEffect"];
        }
    }["useRegisteredLabelId.useIsoLayoutEffect"], [
        id,
        setLabelId
    ]);
    return id;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusElementWithVisible",
    ()=>focusElementWithVisible,
    "useLabel",
    ()=>useLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useLabel(params = {}) {
    const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
    const { controlId: contextControlId, setLabelId: setContextLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const syncLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabel.useStableCallback[syncLabelId]": (nextLabelId)=>{
            setContextLabelId(nextLabelId);
            setLabelIdProp?.(nextLabelId);
        }
    }["useLabel.useStableCallback[syncLabelId]"]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredLabelId"])(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
        if (focusControlProp) {
            focusControlProp(event, resolvedControlId);
            return;
        }
        if (!resolvedControlId) {
            return;
        }
        const controlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget).getElementById(resolvedControlId);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(controlElement)) {
            focusElementWithVisible(controlElement);
        }
    }
    function handleInteraction(event) {
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
        if (target?.closest('button,input,select,textarea')) {
            return;
        }
        // Prevent text selection when double clicking label.
        if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
        }
        if (native) {
            return;
        }
        focusControl(event);
    }
    return native ? {
        id,
        htmlFor: resolvedControlId ?? undefined,
        onMouseDown: handleInteraction
    } : {
        id,
        onClick: handleInteraction,
        onPointerDown (event) {
            event.preventDefault();
        }
    };
}
function focusElementWithVisible(element) {
    element.focus({
        // Available from Chrome 144+ (January 2026).
        // Safari and Firefox already support it.
        // @ts-expect-error not available in types yet
        focusVisible: true
    });
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldLabel",
    ()=>FieldLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldLabel(componentProps, forwardedRef) {
    const { render, className, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const labelRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])({
        id: labelId ?? idProp,
        native: nativeLabel
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "FieldLabel.FieldLabel.useEffect": ()=>{
                if (!labelRef.current) {
                    return;
                }
                const isLabelTag = labelRef.current.tagName === 'LABEL';
                if (nativeLabel) {
                    if (!isLabelTag) {
                        const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                        const message = '<Field.Label> expected a <label> element because the `nativeLabel` prop is true. ' + 'Rendering a non-<label> disables native label association, so `htmlFor` will not ' + 'work. Use a real <label> in the `render` prop, or set `nativeLabel` to `false`.';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                    }
                } else if (isLabelTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = '<Field.Label> expected a non-<label> element because the `nativeLabel` prop is false. ' + 'Rendering a <label> assumes native label behavior while Base UI treats it as ' + 'non-native, which can cause unexpected pointer behavior. Use a non-<label> in the ' + '`render` prop, or set `nativeLabel` to `true`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            }
        }["FieldLabel.FieldLabel.useEffect"], [
            nativeLabel
        ]);
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('label', componentProps, {
        ref: [
            forwardedRef,
            labelRef
        ],
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldLabel.displayName = "FieldLabel";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>FieldError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const FieldError = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldError(componentProps, forwardedRef) {
    const { render, id: idProp, className, match, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const { validityData, state: fieldState, name } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const { errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formError = name ? errors[name] : null;
    let rendered = false;
    if (formError || match === true) {
        rendered = true;
    } else if (match) {
        rendered = Boolean(validityData.state[match]);
    } else {
        rendered = validityData.state.valid === false;
    }
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(rendered);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldError.FieldError.useIsoLayoutEffect": ()=>{
            if (!rendered || !id) {
                return undefined;
            }
            setMessageIds({
                "FieldError.FieldError.useIsoLayoutEffect": (v)=>v.concat(id)
            }["FieldError.FieldError.useIsoLayoutEffect"]);
            return ({
                "FieldError.FieldError.useIsoLayoutEffect": ()=>{
                    setMessageIds({
                        "FieldError.FieldError.useIsoLayoutEffect": (v)=>v.filter({
                                "FieldError.FieldError.useIsoLayoutEffect": (item)=>item !== id
                            }["FieldError.FieldError.useIsoLayoutEffect"])
                    }["FieldError.FieldError.useIsoLayoutEffect"]);
                }
            })["FieldError.FieldError.useIsoLayoutEffect"];
        }
    }["FieldError.FieldError.useIsoLayoutEffect"], [
        rendered,
        id,
        setMessageIds
    ]);
    const errorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [lastRenderedMessage, setLastRenderedMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const errorMessage = formError || (validityData.errors.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        children: validityData.errors.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                children: message
            }, message))
    }) : validityData.error);
    let errorKey = validityData.error;
    if (formError != null) {
        errorKey = Array.isArray(formError) ? JSON.stringify(formError) : formError;
    } else if (validityData.errors.length > 1) {
        errorKey = JSON.stringify(validityData.errors);
    }
    if (rendered && errorKey !== lastRenderedMessageKey) {
        setLastRenderedMessageKey(errorKey);
        setLastRenderedMessage(errorMessage);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: rendered,
        ref: errorRef,
        onComplete () {
            if (!rendered) {
                setMounted(false);
            }
        }
    });
    const state = {
        ...fieldState,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            errorRef
        ],
        state,
        props: [
            {
                id,
                children: rendered ? errorMessage : lastRenderedMessage
            },
            elementProps
        ],
        stateAttributesMapping,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldError.displayName = "FieldError";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldDescription",
    ()=>FieldDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const FieldDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldDescription(componentProps, forwardedRef) {
    const { render, id: idProp, className, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldDescription.FieldDescription.useIsoLayoutEffect": ()=>{
            if (!id) {
                return undefined;
            }
            setMessageIds({
                "FieldDescription.FieldDescription.useIsoLayoutEffect": (v)=>v.concat(id)
            }["FieldDescription.FieldDescription.useIsoLayoutEffect"]);
            return ({
                "FieldDescription.FieldDescription.useIsoLayoutEffect": ()=>{
                    setMessageIds({
                        "FieldDescription.FieldDescription.useIsoLayoutEffect": (v)=>v.filter({
                                "FieldDescription.FieldDescription.useIsoLayoutEffect": (item)=>item !== id
                            }["FieldDescription.FieldDescription.useIsoLayoutEffect"])
                    }["FieldDescription.FieldDescription.useIsoLayoutEffect"]);
                }
            })["FieldDescription.FieldDescription.useIsoLayoutEffect"];
        }
    }["FieldDescription.FieldDescription.useIsoLayoutEffect"], [
        id,
        setMessageIds
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            {
                id
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldDescription.displayName = "FieldDescription";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControlled",
    ()=>useControlled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useControlled({ controlled, default: defaultProp, name, state = 'value' }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        `Base UI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is for more details.
                if (!isControlled && JSON.stringify(defaultValue) !== JSON.stringify(defaultProp)) {
                    console.error([
                        `Base UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabelableId",
    ()=>useLabelableId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useLabelableId(params = {}) {
    const { id, implicit = false, controlRef } = params;
    const { controlId, registerControlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(id);
    const controlIdForEffect = implicit ? controlId : undefined;
    const controlSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "useLabelableId.useRefWithInit[controlSourceRef]": ()=>Symbol('labelable-control')
    }["useLabelableId.useRefWithInit[controlSourceRef]"]);
    const hasRegisteredRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hadExplicitIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](id != null);
    const unregisterControlId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabelableId.useStableCallback[unregisterControlId]": ()=>{
            if (!hasRegisteredRef.current || registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return;
            }
            hasRegisteredRef.current = false;
            registerControlId(controlSourceRef.current, undefined);
        }
    }["useLabelableId.useStableCallback[unregisterControlId]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useLabelableId.useIsoLayoutEffect": ()=>{
            if (registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return undefined;
            }
            let nextId;
            if (implicit) {
                const elem = controlRef?.current;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elem) && elem.closest('label') != null) {
                    nextId = id ?? null;
                } else {
                    nextId = controlIdForEffect ?? defaultId;
                }
            } else if (id != null) {
                hadExplicitIdRef.current = true;
                nextId = id;
            } else if (hadExplicitIdRef.current) {
                nextId = defaultId;
            } else {
                unregisterControlId();
                return undefined;
            }
            if (nextId === undefined) {
                unregisterControlId();
                return undefined;
            }
            hasRegisteredRef.current = true;
            registerControlId(controlSourceRef.current, nextId);
            return undefined;
        }
    }["useLabelableId.useIsoLayoutEffect"], [
        id,
        controlRef,
        controlIdForEffect,
        registerControlId,
        implicit,
        defaultId,
        controlSourceRef,
        unregisterControlId
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLabelableId.useEffect": ()=>{
            return unregisterControlId;
        }
    }["useLabelableId.useEffect"], [
        unregisterControlId
    ]);
    return controlId ?? defaultId;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useField",
    ()=>useField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useField(params) {
    const { enabled = true, value, id, name, controlRef, commit } = params;
    const { formRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { invalid, markedDirtyRef, validityData, setValidityData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const getValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(params.getValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled) {
                return;
            }
            let initialValue = value;
            if (initialValue === undefined) {
                initialValue = getValue();
            }
            if (validityData.initialValue === null && initialValue !== null) {
                setValidityData({
                    "useField.useIsoLayoutEffect": (prev)=>({
                            ...prev,
                            initialValue
                        })
                }["useField.useIsoLayoutEffect"]);
            }
        }
    }["useField.useIsoLayoutEffect"], [
        enabled,
        setValidityData,
        value,
        validityData.initialValue,
        getValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled || !id) {
                return;
            }
            formRef.current.fields.set(id, {
                getValue,
                name,
                controlRef,
                validityData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid),
                validate (flushSync = true) {
                    let nextValue = value;
                    if (nextValue === undefined) {
                        nextValue = getValue();
                    }
                    markedDirtyRef.current = true;
                    if (!flushSync) {
                        commit(nextValue);
                    } else {
                        // Synchronously update the validity state so the submit event can be prevented.
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useField.useIsoLayoutEffect": ()=>commit(nextValue)
                        }["useField.useIsoLayoutEffect"]);
                    }
                }
            });
        }
    }["useField.useIsoLayoutEffect"], [
        commit,
        controlRef,
        enabled,
        formRef,
        getValue,
        id,
        invalid,
        markedDirtyRef,
        name,
        validityData,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            const fields = formRef.current.fields;
            return ({
                "useField.useIsoLayoutEffect": ()=>{
                    if (id) {
                        fields.delete(id);
                    }
                }
            })["useField.useIsoLayoutEffect"];
        }
    }["useField.useIsoLayoutEffect"], [
        formRef,
        id
    ]);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControl",
    ()=>FieldControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const FieldControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldControl(componentProps, forwardedRef) {
    const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, ...elementProps } = componentProps;
    const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
        ...fieldState,
        disabled
    };
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id: idProp
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldControl.FieldControl.useIsoLayoutEffect": ()=>{
            const hasExternalValue = valueProp != null;
            if (validation.inputRef.current?.value || hasExternalValue && valueProp !== '') {
                setFilled(true);
            } else if (hasExternalValue && valueProp === '') {
                setFilled(false);
            }
        }
    }["FieldControl.FieldControl.useIsoLayoutEffect"], [
        validation.inputRef,
        setFilled,
        valueProp
    ]);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldControl.FieldControl.useIsoLayoutEffect": ()=>{
            if (autoFocus && inputRef.current === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(inputRef.current))) {
                setFocused(true);
            }
        }
    }["FieldControl.FieldControl.useIsoLayoutEffect"], [
        autoFocus,
        setFocused
    ]);
    const [valueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: defaultValue,
        name: 'FieldControl',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueUnwrapped : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])({
        id,
        name,
        commit: validation.commit,
        value,
        getValue: {
            "FieldControl.FieldControl.useField": ()=>validation.inputRef.current?.value
        }["FieldControl.FieldControl.useField"],
        controlRef: validation.inputRef
    });
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('input', componentProps, {
        ref: [
            forwardedRef,
            inputRef
        ],
        state,
        props: [
            {
                id,
                disabled,
                name,
                ref: validation.inputRef,
                'aria-labelledby': labelId,
                autoFocus,
                ...isControlled ? {
                    value
                } : {
                    defaultValue
                },
                onChange (event) {
                    const inputValue = event.currentTarget.value;
                    onValueChange?.(inputValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent));
                    setDirty(inputValue !== validityData.initialValue);
                    setFilled(inputValue !== '');
                },
                onFocus () {
                    setFocused(true);
                },
                onBlur (event) {
                    setTouched(true);
                    setFocused(false);
                    if (validationMode === 'onBlur') {
                        validation.commit(event.currentTarget.value);
                    }
                },
                onKeyDown (event) {
                    if (event.currentTarget.tagName === 'INPUT' && event.key === 'Enter') {
                        setTouched(true);
                        validation.commit(event.currentTarget.value);
                    }
                }
            },
            validation.getInputValidationProps(),
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldControl.displayName = "FieldControl";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldValidity",
    ()=>FieldValidity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
/**
 * Used to display a custom message based on the field’s validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const FieldValidity = function FieldValidity(props) {
    const { children } = props;
    const { validityData, invalid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const combinedFieldValidityData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldValidity.useMemo[combinedFieldValidityData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid)
    }["FieldValidity.useMemo[combinedFieldValidityData]"], [
        validityData,
        invalid
    ]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const { transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(isInvalid);
    const fieldValidityState = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldValidity.useMemo[fieldValidityState]": ()=>{
            return {
                ...combinedFieldValidityData,
                validity: combinedFieldValidityData.state,
                transitionStatus
            };
        }
    }["FieldValidity.useMemo[fieldValidityState]"], [
        combinedFieldValidityData,
        transitionStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children(fieldValidityState)
    });
};
if ("TURBOPACK compile-time truthy", 1) FieldValidity.displayName = "FieldValidity";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItemContext",
    ()=>FieldItemContext,
    "useFieldItemContext",
    ()=>useFieldItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const FieldItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    disabled: false
});
if ("TURBOPACK compile-time truthy", 1) FieldItemContext.displayName = "FieldItemContext";
function useFieldItemContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldItemContext);
    return context;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxGroupContext",
    ()=>CheckboxGroupContext,
    "useCheckboxGroupContext",
    ()=>useCheckboxGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItem",
    ()=>FieldItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)");
/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldItem(componentProps, forwardedRef) {
    const { render, className, disabled: disabledProp = false, ...elementProps } = componentProps;
    const { state, disabled: rootDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const disabled = rootDisabled || disabledProp;
    const checkboxGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckboxGroupContext"])();
    // checkboxGroupContext.parent is truthy even if no parent checkbox is involved
    const parentId = checkboxGroupContext?.parent.id;
    // this a more reliable check
    const hasParentCheckbox = checkboxGroupContext?.allValues !== undefined;
    const controlId = hasParentCheckbox ? parentId : undefined;
    const fieldItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldItem.FieldItem.useMemo[fieldItemContext]": ()=>({
                disabled
            })
    }["FieldItem.FieldItem.useMemo[fieldItemContext]"], [
        disabled
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        controlId: controlId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldItemContext"].Provider, {
            value: fieldItemContext,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldItem.displayName = "FieldItem";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Control",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControl"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"],
    "Error",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldItem"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldLabel"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRoot"],
    "Validity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldValidity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>");
/**
 * A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Input](https://base-ui.com/react/components/input)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__["Field"].Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time truthy", 1) Input.displayName = "Input";
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LucideProvider.useMemo[value]": ()=>({
                size,
                color,
                strokeWidth,
                absoluteStrokeWidth,
                className
            })
    }["LucideProvider.useMemo[value]"], [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/context.js [app-client] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].width,
        height: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", contextClass, className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Globe
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
];
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("globe", __iconNode);
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
}),
"[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=087u_0cq-zf0._.js.map