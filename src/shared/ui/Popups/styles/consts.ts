import { type DropdownDirection } from '../../../types/ui'
import cls from './popup.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.menuBottomLeft,
    'bottom right': cls.menuBottomRight,
    'top right': cls.menuTopRight,
    'top left': cls.menuTopLeft
}
